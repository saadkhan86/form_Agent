import { Request, Response } from "express"
import userRepo from "../repositories/userRepo"
import { IUser } from "../interfaces/IUser"

const adminController = {
  get: async (req: Request, res: Response) => {
    const users = await userRepo.get(req.query.params as IUser.query)
    res
      .status(200)
      .json({ success: true, message: "Users Fetched Successfully", users })
  },
}
export default adminController
