import { Request, Response } from "express"
import { IUser } from "../interfaces/IUser"
import userRepo from "../repositories/userRepo"
import mongoose from "mongoose"

const formController = {
  create: async (req: Request, res: Response) => {
    try {
      let user: IUser.create = req.body.user
      user = await userRepo.create(user)
      res
        .status(200)
        .json({ success: true, message: "User created successfully", user })
    } catch (error) {
      if (error instanceof mongoose.Error) {
        console.log(error)
      }
      res.status(500).json({ success: false, error })
    }
  },
}

export default formController
