import { NextFunction, Request, Response } from "express"
import { IUser } from "../interfaces/IUser"
import userRepo from "../repositories/userRepo"

const formController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user: IUser.create = req.body
      user = await userRepo.create(user)
      res.status(200).json({
        success: true,
        message: "User created successfully",
        user: req.body,
      })
    } catch (error) {
      next(error, req, res)
    }
  },
}

export default formController
