import { Document, Types } from "mongoose"

export declare namespace IUser {
  interface IWork {
    employerName: string
    jobTitle: string
    workStartDate: Date
    workEndDate: Date
    startingSalary: number
    endingSalary: number
    reasonForLeaving: string
  }

  interface IEducation {
    schoolName: string
    degree: string
    fieldOfStudy: string
    educationStartDate: Date
    educationEndDate: Date
    anyWorkHistory: boolean
    workHistory?: IWork
  }

  interface IReference {
    referenceName: string
    referenceRelationship: string
    referencePhoneNumber: string
    referenceMilitaryService: boolean
  }

  interface IEmergencyContact {
    emergencyContactName: string
    emergencyContactRelationship: string
    emergencyContactPhoneNumber: string
  }

  interface create {
    name: string
    email: string
    phone: string
    DOB: Date
    address: string
    positionApplied: string
    availableStartDate: Date
    whyShouldYouBeHired: string
    isEducated: boolean
    education?: IEducation
    employmentHistory?: IWork
    authorizedToWork: boolean
    UScitizen: boolean
    driverLicenseNumber: string
    workedHereBefore: boolean
    isDrugBackgroundCheck: boolean
    isDrugBackgroundCheckPassed: boolean
    usesIllegalDrugs: boolean
    isConvictedToFelony: boolean
    references: IReference
    emergencyContact: IEmergencyContact
    SSN: string
  }
  interface Doc extends Document, create {}
  interface query {
    _id?: Types.ObjectId | string
    name?: string
    email?: string
    positionApplied?: string
    isEducated?: boolean
    authorizedToWork?: boolean
    UScitizen?: boolean
    workedHereBefore?: boolean
    isDrugBackgroundCheck?: boolean
    isDrugBackgroundCheckPassed?: boolean
    usesIllegalDrugs?: boolean
    isConvictedToFelony?: boolean
    page?: number
    limit?: number
  }
}
