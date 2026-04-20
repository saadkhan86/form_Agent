import express from "express"
import userRouter from "./userRouter"
import adminRouter from "./adminRouter"
const router = express()
router.use("/user", userRouter)
router.use("/admin", adminRouter)
export default router
