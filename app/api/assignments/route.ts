import { assignments } from "@/lib/assignments"

export async function GET() {
  return Response.json(assignments)
}

export async function POST(req: Request) {
  const body = await req.json()

  if (!body.title || !body.subject) {
    return Response.json(
      { error: "Title and subject are required" },
      { status: 400 }
    )
  }

  const newAssignment = {
    id: assignments.length + 1,
    title: body.title,
    subject: body.subject,
    status: "pending"
  }

  assignments.push(newAssignment)

  return Response.json(newAssignment)
}