import mongoose from "mongoose"
export const connection = async () => {
  return await mongoose
    .connect(`${process.env.MONGODB_URI}`)
    .then(() => {
      console.log("Connected to MongoDB")
    })
    .catch((error) => {
      console.log(error)
    })
}
