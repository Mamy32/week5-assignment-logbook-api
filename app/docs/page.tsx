"use client"

import SwaggerUI from "swagger-ui-react"

export default function Docs() {

  const spec = {
    openapi: "3.0.0",
    info: {
      title: "Assignment Log Book API",
      version: "1.0.0",
      description: "REST API for managing assignments in a log book"
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
                      description: "Build REST API using Next.js",
                      status: "Create",
                      assignmentDate: "2026-03-10",
                      dueDate: "2026-03-20"
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
                    description: { type: "string" },
                    dueDate: { type: "string" }
                  }
                },
                example: {
                  title: "Backend Assignment",
                  description: "Build REST API with Next.js",
                  dueDate: "2026-03-30"
                }
              }
            }
          },

          responses: {
            "200": {
              description: "Assignment created successfully"
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
                example: {
                  title: "Updated Assignment",
                  description: "Update REST API project",
                  status: "Submitted",
                  dueDate: "2026-03-30"
                }
              }
            }
          },

          responses: {
            "200": {
              description: "Assignment updated successfully"
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
              description: "Assignment deleted successfully"
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