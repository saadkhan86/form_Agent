import { flow, FlowNode } from "./flow.service"

export function validateAnswer(step: string, answer: string): { valid: boolean; message?: string } {
  const node: FlowNode | undefined = flow[step]
  
  if (!node || !node.validate) return { valid: true }

  const val = answer.trim()
  if (!val) {
    return { valid: false, message: "This field is required. Please provide a valid response." }
  }

  switch (node.validate) {
    case "email": {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(val)) return { valid: false, message: "Invalid email address. Please try again." }
      break
    }
    case "phone": {
      const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4,6}$/
      if (!phoneRegex.test(val)) return { valid: false, message: "Invalid phone number. Please try again." }
      break
    }
    case "number": {
      if (isNaN(Number(val))) return { valid: false, message: "Invalid number. Please enter a valid numerical value." }
      break
    }
    case "boolean": {
      const lower = val.toLowerCase()
      if (lower !== "yes" && lower !== "no" && lower !== "true" && lower !== "false") {
        return { valid: false, message: "Invalid response. Please answer yes or no." }
      }
      break
    }
    case "date": {
      const dateRegex = /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}$/
      if (!dateRegex.test(val) && isNaN(Date.parse(val))) {
        return { valid: false, message: "Invalid date format. Please use a recognizable date format like dd/mm/yyyy." }
      }
      break
    }
  }

  return { valid: true }
}

export function getNextStep(step: string, answer: string) {
  const node: FlowNode | undefined = flow[step]

  if (!node) return null

  if (typeof node.next === "function") {
    return node.next(answer)
  }

  return node.next
}

export function getMessage(step: string) {
  return flow[step]?.message || null
}
