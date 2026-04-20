export interface FlowNode {
  message: string
  next?: string | ((answer: string) => string)
  validate?: string
}

export const flow: Record<string, FlowNode> = {
  start: {
    message:
      "Hello. You are now starting a formal application process. All information must be accurate and verifiable. Are you ready to start(yes/no)?",
    next: (answer: string) =>
      answer.toLowerCase() === "yes" ? "name" : "start",
  },

  name: {
    message: "What is your full legal name?",
    validate: "string",
    next: "email",
  },
  email: {
    message: "What is your email address(abc@xyz.com)?",
    validate: "email",
    next: "phone",
  },

  phone: {
    message: "What is your phone number(+1XXXXXXXXXX)?",
    validate: "phone",
    next: "DOB",
  },
  DOB: {
    message: "What is your date of birth (dd/mm/yyyy)?",
    validate: "date",
    next: "address",
  },

  address: {
    message: "What is your full address?",
    validate: "string",
    next: "positionApplied",
  },

  positionApplied: {
    message:
      "What position are you applying for(software engineer, data scientist, etc.)?",
    validate: "string",
    next: "availableStartDate",
  },

  availableStartDate: {
    message: "When can you start(dd/mm/yyyy)?",
    validate: "date",
    next: "whyShouldYouBeHired",
  },

  whyShouldYouBeHired: {
    message: "Why should we hire you(A short message)?",
    validate: "string",
    next: "isEducated",
  },

  isEducated: {
    message: "Are you educated? (yes/no)",
    next: (answer: string) =>
      answer.toLowerCase() === "yes"
        ? "education.schoolName"
        : "employmentHistory.employerName",
  },
  "education.schoolName": {
    message: "What is your latest school/institute name?",
    validate: "string",
    next: "education.degree",
  },

  "education.degree": {
    message: "What degree did you obtain(BS,Intermediate,Matric,etc)?",
    validate: "string",
    next: "education.fieldOfStudy",
  },

  "education.fieldOfStudy": {
    message: "What was your field of study(Computer Science,Mathematics,etc)?",
    validate: "string",
    next: "education.educationStartDate",
  },

  "education.educationStartDate": {
    message: "When did your education start(dd/mm/yyyy)?",
    validate: "date",
    next: "education.educationEndDate",
  },

  "education.educationEndDate": {
    message: "When did your education end(dd/mm/yyyy)?",
    validate: "date",
    next: "education.anyWorkHistory",
  },

  "education.anyWorkHistory": {
    message: "Did you work during studies (yes/no)? ",
    next: (answer: string) =>
      answer.toLowerCase() === "yes"
        ? "employmentHistory.employerName"
        : "authorizedToWork",
  },
  "employmentHistory.employerName": {
    message: "What was your employer name?",
    validate: "string",
    next: "employmentHistory.jobTitle",
  },

  "employmentHistory.jobTitle": {
    message: "What was your job title?",
    validate: "string",
    next: "employmentHistory.workStartDate",
  },

  "employmentHistory.workStartDate": {
    message: "When did you start working(dd/mm/yyyy)?",
    validate: "date",
    next: "employmentHistory.workEndDate",
  },

  "employmentHistory.workEndDate": {
    message: "When did you leave the job(dd/mm/yyyy)?",
    validate: "date",
    next: "employmentHistory.startingSalary",
  },

  "employmentHistory.startingSalary": {
    message: "What was your starting salary(20000)?",
    validate: "number",
    next: "employmentHistory.endingSalary",
  },

  "employmentHistory.endingSalary": {
    message: "What was your ending salary(50000)?",
    validate: "number",
    next: "employmentHistory.reasonForLeaving",
  },

  "employmentHistory.reasonForLeaving": {
    message: "Why did you leave the job?",
    validate: "string",
    next: "authorizedToWork",
  },

  authorizedToWork: {
    message: "Are you authorized to work(yes/no)?",
    validate: "boolean",
    next: "UScitizen",
  },

  UScitizen: {
    message: "Are you a US citizen(yes/no)?",
    validate: "boolean",
    next: "driverLicenseNumber",
  },

  driverLicenseNumber: {
    message: "What is your driver license number(XXXXXXXXX)?",
    validate: "string",
    next: "workedHereBefore",
  },

  workedHereBefore: {
    message: "Have you worked here before(yes/no)?",
    validate: "boolean",
    next: "isDrugBackgroundCheck",
  },

  isDrugBackgroundCheck: {
    message: "Do you consent to drug background check(yes/no)?",
    validate: "boolean",
    next: "isDrugBackgroundCheckPassed",
  },

  isDrugBackgroundCheckPassed: {
    message: "Did you pass your drug background check(yes/no)?",
    validate: "boolean",
    next: "usesIllegalDrugs",
  },

  usesIllegalDrugs: {
    message: "Do you use illegal drugs(yes/no)?",
    validate: "boolean",
    next: "isConvictedToFelony",
  },

  isConvictedToFelony: {
    message: "Have you ever been convicted of a felony(yes/no)?",
    validate: "boolean",
    next: "references.referenceName",
  },

  "references.referenceName": {
    message: "What is your reference name?",
    validate: "string",
    next: "references.referenceRelationship",
  },

  "references.referenceRelationship": {
    message: "What is your relationship with reference?",
    validate: "string",
    next: "references.referencePhoneNumber",
  },

  "references.referencePhoneNumber": {
    message: "What is reference phone number(+1XXXXXXXXXX)? ",
    validate: "phone",
    next: "references.referenceMilitaryService",
  },

  "references.referenceMilitaryService": {
    message: "Does your reference have military service(yes/no)?",
    validate: "boolean",
    next: "emergencyContact.emergencyContactName",
  },

  "emergencyContact.emergencyContactName": {
    message: "Emergency contact name?",
    validate: "string",
    next: "emergencyContact.emergencyContactRelationship",
  },

  "emergencyContact.emergencyContactRelationship": {
    message: "Relationship with emergency contact?",
    validate: "string",
    next: "emergencyContact.emergencyContactPhoneNumber",
  },

  "emergencyContact.emergencyContactPhoneNumber": {
    message: "Emergency contact phone number(+1XXXXXXXXXX)?",
    validate: "phone",
    next: "SSN",
  },

  SSN: {
    message: "What is your SSN(XXX-XX-XXXX)?",
    validate: "string",
    next: "end",
  },

  end: {
    message: "Thank you! Your application has been submitted successfully.",
  },
}
