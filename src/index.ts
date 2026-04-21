import "dotenv/config"
import express, { NextFunction, Request, Response } from "express"
import http from "http"
import { Server } from "socket.io"
import router from "./router/router"
import { connection } from "./connection/connection"
import chatSocket from "./services/chat.service"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use("/api/v1", router)

chatSocket(io)

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
  })
})
connection()
  .then(() => {
    server.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running on port ${process.env.PORT || 8080}`)
    })
  })
  .catch((error: any) => {
    console.log(error)
    process.exit(1)
  })
