export type Assignment = {
  id: number
  title: string
  description: string
  status: "Create" | "On Process" | "Submitted"
  assignmentDate: string
  dueDate: string
}

export let assignments: Assignment[] = [
  {
    id: 1,
    title: "REST API Assignment",
    description: "Build REST API using Next.js",
    status: "Create",
    assignmentDate: new Date().toISOString(),
    dueDate: "2026-03-20"
  },
  {
    id: 2,
    title: "Database Design",
    description: "Design ER diagram",
    status: "On Process",
    assignmentDate: new Date().toISOString(),
    dueDate: "2026-03-25"
  }
]