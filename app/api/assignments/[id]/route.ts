import { assignments } from "@/lib/assignments"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params

  const assignment = assignments.find(a => a.id === parseInt(id))

  if (!assignment) {
    return Response.json(
      { error: "Assignment not found" },
      { status: 404 }
    )
  }

  return Response.json(assignment)
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params
  const body = await req.json()

  const assignment = assignments.find(a => a.id === parseInt(id))

  if (!assignment) {
    return Response.json(
      { error: "Assignment not found" },
      { status: 404 }
    )
  }

  assignment.title = body.title
  assignment.description = body.description
  assignment.status = body.status
  assignment.dueDate = body.dueDate

  return Response.json(assignment)
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {

  const { id } = await params

  const index = assignments.findIndex(a => a.id === parseInt(id))

  if (index === -1) {
    return Response.json(
      { error: "Assignment not found" },
      { status: 404 }
    )
  }

  assignments.splice(index, 1)

  return Response.json({
    message: "Assignment deleted successfully"
  })
}