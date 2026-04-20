import express from "express"
import userRouter from "./userRouter"
import chatSocket from "../services/chat.service"
const router = express()
router.use("/user", userRouter)
router.use("/chat-with-agent", chatSocket)
export default router
