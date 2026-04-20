import type { IUser } from "../interfaces/IUser.js"
import userModel from "../models/user.model.js"

class userRepo {
  public async create(user: IUser.create) {
    const newUser = new userModel(user)
    return await newUser.save()
  }
  public async get(data: IUser.query) {
    let _query: Record<string, any> = {}
    const { page = 1, limit = 10 } = data
    if (data._id) _query._id = data._id
    if (data.name) _query.$or = { name: { $regex: data.name, $options: "i" } }
    if (data.email) _query.email = data.email
    if (data.positionApplied) _query.positionApplied = data.positionApplied
    if (data.isEducated) _query.isEducated = data.isEducated
    if (data.authorizedToWork) _query.authorizedToWork = data.authorizedToWork
    if (data.UScitizen) _query.UScitizen = data.UScitizen
    if (data.workedHereBefore) _query.workedHereBefore = data.workedHereBefore
    if (data.isDrugBackgroundCheck)
      _query.isDrugBackgroundCheck = data.isDrugBackgroundCheck
    if (data.isDrugBackgroundCheckPassed)
      _query.isDrugBackgroundCheckPassed = data.isDrugBackgroundCheckPassed
    if (data.usesIllegalDrugs) _query.usesIllegalDrugs = data.usesIllegalDrugs
    if (data.isConvictedToFelony)
      _query.isConvictedToFelony = data.isConvictedToFelony
    let users = await userModel
      .find(_query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
    let count = await userModel.countDocuments(_query)
    return { users, count }
  }
}
export default new userRepo()
