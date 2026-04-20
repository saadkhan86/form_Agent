import type { IUser } from "../interfaces/IUser.js"
import userModel from "../models/user.model.js"

class userRepo {
  public async create(user: IUser.create) {
    const newUser = new userModel(user)
    return await newUser.save()
  }
}
export default new userRepo()
