## Assignment Log Book API

This REST API allows users to manage assignments in a log book.

### API Endpoints

| Method | Endpoint | Description | Success Response | Error Response |
|------|------|------|------|------|
| GET | /api/assignments | Get all assignments | 200 OK | — |
| GET | /api/assignments/{id} | Get assignment by ID | 200 OK | 404 Assignment not found |
| POST | /api/assignments | Create a new assignment | 200 Assignment created | 400 Missing fields |
| PUT | /api/assignments/{id} | Update an assignment | 200 Assignment updated | 404 Assignment not found |
| DELETE | /api/assignments/{id} | Delete an assignment | 200 Assignment deleted | 404 Assignment not found |