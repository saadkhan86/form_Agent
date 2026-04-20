import express from "express"
import adminController from "../controller/adminController"
const adminRouter = express()
adminRouter.get("/users", adminController.get)
export default adminRouter
