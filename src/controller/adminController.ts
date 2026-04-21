import { Request, Response } from "express"
import userRepo from "../repositories/userRepo"
import { IUser } from "../interfaces/IUser"

const adminController = {
  get: async (req: Request, res: Response, next: Function) => {
    try {
      const users = await userRepo.get(req.query as unknown as IUser.query)
      res
        .status(200)
        .json({ success: true, message: "Users Fetched Successfully", users })
    } catch (error) {
      next(error, req, res)
    }
  },
}
export default adminController
