"use client"

import SwaggerUI from "swagger-ui-react"

export default function Docs() {

  const spec = {
    openapi: "3.0.0",
    info: {
      title: "Assignment Log Book API",
      version: "1.0.0"
    },
    paths: {
      "/api/assignments": {
        get: {
          summary: "Get all assignments",
          responses: {
            "200": {
              description: "List of assignments",
              content: {
                "application/json": {
                  example: [
                    {
                      id: 1,
                      title: "REST API Assignment",
                      subject: "Web Development",
                      status: "pending"
                    },
                    {
                      id: 2,
                      title: "Database Design",
                      subject: "Database Systems",
                      status: "completed"
                    }
                  ]
                }
              }
            }
          }
        },

        post: {
          summary: "Create a new assignment",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    subject: { type: "string" }
                  }
                },
                example: {
                  title: "API Documentation",
                  subject: "Web Development"
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Assignment created"
            },
            "400": {
              description: "Missing required fields"
            }
          }
        }
      },

      "/api/assignments/{id}": {
        get: {
          summary: "Get assignment by ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer"
              }
            }
          ],
          responses: {
            "200": {
              description: "Assignment found"
            },
            "404": {
              description: "Assignment not found"
            }
          }
        },

        put: {
          summary: "Update assignment",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer"
              }
            }
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    subject: { type: "string" },
                    status: { type: "string" }
                  }
                },
                example: {
                  title: "Updated Assignment",
                  subject: "Web Development",
                  status: "completed"
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Assignment updated"
            },
            "404": {
              description: "Assignment not found"
            }
          }
        },

        delete: {
          summary: "Delete assignment",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer"
              }
            }
          ],
          responses: {
            "200": {
              description: "Assignment deleted"
            },
            "404": {
              description: "Assignment not found"
            }
          }
        }
      }
    }
  }

  return <SwaggerUI spec={spec} />
}