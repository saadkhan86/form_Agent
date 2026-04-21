import express from "express"
import formController from "../controller/fromController"

const userRouter = express.Router()

userRouter.post("/", formController.create)
// userRouter.post("/chat-bot",)

export default userRouter
