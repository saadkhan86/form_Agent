import mongoose from "mongoose"
import type { IUser } from "../interfaces/IUser.js"

const workSchema = new mongoose.Schema({
  employerName: {
    type: String,
    required: [true, "employer name is required"],
  },
  jobTitle: {
    type: String,
    required: [true, "job title is required"],
  },
  workStartDate: {
    type: Date,
    required: [true, "work start date is required"],
  },
  workEndDate: {
    type: Date,
    required: [true, "work end date is required"],
  },
  startingSalary: {
    type: Number,
    required: [true, "starting salary is required"],
  },
  endingSalary: {
    type: Number,
    required: [true, "ending salary is required"],
  },
  reasonForLeaving: {
    type: String,
    required: [true, "reason for leaving is required"],
  },
})
const educationSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: [true, "school name is required"],
  },
  degree: {
    type: String,
    required: [true, "degree title is required"],
  },
  fieldOfStudy: {
    type: String,
    required: [true, "field of study is required"],
  },
  educationStartDate: {
    type: Date,
    required: [true, "education start date is required"],
  },
  educationEndDate: {
    type: Date,
    required: [true, "education end date is required"],
  },
  anyWorkHistory: {
    type: Boolean,
    required: [true, "work history is required"],
  },
  workHistory: {
    type: workSchema,
    required: function () {
      return this.anyWorkHistory === true
    },
  },
})
const referenceSchema = new mongoose.Schema({
  referenceName: {
    type: String,
    required: [true, "name is required"],
  },
  referenceRelationship: {
    type: String,
    required: [true, "relationship is required"],
  },
  referencePhoneNumber: {
    type: String,
    required: [true, "phone number is required"],
  },
  referenceMilitaryService: {
    type: Boolean,
    required: [true, "military service is required"],
  },
})
const emergencyContactSchema = new mongoose.Schema({
  emergencyContactName: {
    type: String,
    required: [true, "name is required"],
  },
  emergencyContactRelationship: {
    type: String,
    required: [true, "relationship is required"],
  },
  emergencyContactPhoneNumber: {
    type: String,
    required: [true, "phone number is required"],
  },
})
const userSchema = new mongoose.Schema<IUser.Doc>({
  name: {
    type: String,
    trim: true,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      },
      message: "invalid email address",
    },
    required: [true, "email address is required"],
  },
  phone: {
    type: String,
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4,6}$/.test(
          value,
        )
      },
      message: "invalid phone number",
    },
    required: [true, "phone number is required"],
  },
  DOB: {
    type: Date,
    required: [true, "date of birth is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  positionApplied: {
    type: String,
    required: [true, "position applied is required"],
  },
  availableStartDate: {
    type: Date,
    required: [true, "available start date is required"],
  },
  whyShouldYouBeHired: {
    type: String,
    required: [true, "why should you be hired is required"],
  },
  isEducated: {
    type: Boolean,
    required: [true, "is educated is required"],
  },
  education: {
    type: educationSchema,
    _id: false,
    required: function () {
      return this.isEducated === true
    },
  },
  employmentHistory: {
    type: workSchema,
    _id: false,
    required: function () {
      return this.isEducated === false
    },
  },
  authorizedToWork: {
    type: Boolean,
    required: [true, "authorized to work is required"],
  },
  UScitizen: {
    type: Boolean,
    required: [true, "US citizen is required"],
  },
  driverLicenseNumber: {
    type: String,
    required: [true, "driver license number is required"],
  },
  workedHereBefore: {
    type: Boolean,
    required: [true, "worked here before is required"],
  },
  isDrugBackgroundCheck: {
    type: Boolean,
    required: [true, "drug background check is required"],
  },
  isDrugBackgroundCheckPassed: {
    type: Boolean,
    required: [true, "drug background check is required"],
  },
  usesIllegalDrugs: {
    type: Boolean,
    required: [true, "uses illegal drugs is required"],
  },
  isConvictedToFelony: {
    type: Boolean,
    required: [true, "convicted to felony is required"],
  },
  references: {
    type: referenceSchema,
    _id: false,
    required: [true, "references are required"],
  },
  emergencyContact: {
    type: emergencyContactSchema,
    _id: false,
    required: [true, "emergency contact is required"],
  },
  SSN: {
    type: String,
    required: [true, "SSN is required"],
  },
})

export default mongoose.model<IUser.Doc>("User", userSchema)
