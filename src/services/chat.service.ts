import { Server } from "socket.io"
import { createSession, getSession, updateSession } from "./session.service"
import { getNextStep, getMessage, validateAnswer } from "./engine.service"
import { saveAnswer } from "./data.service"

import userModel from "../models/user.model"

export default function chatSocket(io: Server) {
  io.on("connection", (socket) => {
    createSession(socket.id)

    const firstMsg = getMessage("start")
    socket.emit("bot", firstMsg)

    socket.on("user-message", async (msg: string) => {
      const session = getSession(socket.id)

      const validation = validateAnswer(session.step, msg)
      if (!validation.valid) {
        socket.emit("bot", validation.message)
        return
      }

      let formattedMsg: any = msg
      const node = require("./flow.service").flow[session.step]

      if (node?.validate === "date") {
        const parts = msg.split(/[\/\-]/)
        if (parts.length === 3)
          formattedMsg = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`)
      } else if (node?.validate === "boolean") {
        formattedMsg = ["yes", "true", "1"].includes(msg.toLowerCase())
      } else if (node?.validate === "number") {
        formattedMsg = Number(msg)
      }

      saveAnswer(session, session.step, formattedMsg)

      const nextStep = getNextStep(session.step, msg)
      session.step = nextStep

      if (!nextStep || nextStep === "end") {
        if (
          session.data.isEducated === true &&
          session.data.employmentHistory
        ) {
          session.data.education.workHistory = session.data.employmentHistory
          delete session.data.employmentHistory
        }

        try {
          await userModel.findOneAndUpdate(
            { email: session.data.email },
            session.data,
            {
              upsert: true,
            },
          )
        } catch (e: any) {
          console.error(e)
          socket.emit(
            "bot",
            "Uh oh, there is a data constraint error on save! " + e.message,
          )
          return
        }

        socket.emit("bot", getMessage("end"))
        return
      }
      socket.emit("bot", getMessage(nextStep))
      updateSession(socket.id, session)
    })
  })
}
