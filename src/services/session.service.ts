const sessions = new Map()
export function createSession(id: string) {
  sessions.set(id, {
    step: "start",
    data: {},
  })
}
export function getSession(id: string) {
  return sessions.get(id)
}
export function updateSession(id: string, session: any) {
  sessions.set(id, session)
}
