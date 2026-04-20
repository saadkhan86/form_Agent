export function saveAnswer(session: any, step: string, answer: any) {
  if (step.startsWith("education.")) {
    const key = step.replace("education.", "")
    session.data.education = session.data.education || {}
    session.data.education[key] = answer
  } else if (step.startsWith("employmentHistory.")) {
    const key = step.replace("employmentHistory.", "")
    session.data.employmentHistory = session.data.employmentHistory || {}
    session.data.employmentHistory[key] = answer
  } else if (step.startsWith("references.")) {
    const key = step.replace("references.", "")
    session.data.references = session.data.references || {}
    session.data.references[key] = answer
  } else if (step.startsWith("emergencyContact.")) {
    const key = step.replace("emergencyContact.", "")
    session.data.emergencyContact = session.data.emergencyContact || {}
    session.data.emergencyContact[key] = answer
  } else {
    session.data[step] = answer
  }
}
