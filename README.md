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


## API Testing Evidence

### GET All Assignments

This request retrieves all assignments stored in the system.
<img width="1271" height="788" alt="image" src="https://github.com/user-attachments/assets/80e3aa81-e303-4e71-914b-63737a9241f9" />




---

### DELETE Assignment

This request deletes an assignment using its ID.
<img width="1271" height="788" alt="image" src="https://github.com/user-attachments/assets/9a36ffe7-9a70-40ab-ab14-d474f4760d54" />


