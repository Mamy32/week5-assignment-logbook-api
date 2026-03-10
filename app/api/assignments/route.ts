
import { assignments, Assignment } from "@/lib/assignments"
export async function GET() {
  return Response.json(assignments)
}

export async function POST(req: Request) {

  const body = await req.json()

  const newAssignment: Assignment = {
    id: assignments.length + 1,
    title: body.title,
    description: body.description,
    status: "Create",
    assignmentDate: new Date().toISOString(),
    dueDate: body.dueDate
  }

  assignments.push(newAssignment)

  return Response.json(newAssignment)
}