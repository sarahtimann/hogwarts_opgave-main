# Pseudokode

## Generelt

Routes sender requesten videre til den rigtige controller.

Controlleren:

- læser data fra requesten
- kalder repository
- sender resultatet tilbage med den rigtige statuskode

Repository står for SQL og databasen.

-

## Houses

### GET /houses

- Hent alle houses fra databasen.
- Send dem tilbage som JSON med status 200.
- Hvis der sker en databasefejl, send status 500.

### GET /houses/:id

- Hent id fra URL'en.
- Find house med det id.
- Hvis den findes, send den med status 200.
- Hvis den ikke findes, send status 404.

-

## Teachers

### GET /teachers

- Hent alle teachers fra databasen.
- Send dem tilbage med status 200.

### GET /teachers/:id

- Hent id fra URL'en.
- Find teacher med det id.
- Send teacher med status 200.
- Hvis teacher ikke findes, send status 404.

### POST /teachers

- Hent teacher-data fra body.
- Opret teacher i databasen.
- Send den nye teacher tilbage med status 201.

### PUT /teachers/:id

- Hent id fra URL'en.
- Hent de nye data fra body.
- Opdater teacher i databasen.
- Hvis teacher findes, send den opdaterede teacher med status 200.
- Hvis den ikke findes, send status 404.

### DELETE /teachers/:id

- Hent id fra URL'en.
- Slet teacher fra databasen.
- Hvis den blev slettet, send status 204.
- Hvis den ikke findes, send status 404.

-

## Students

Students fungerer på samme måde som teachers:

- `GET /students` henter alle students.
- `GET /students/:id` henter én student.
- `POST /students` opretter en student.
- `PUT /students/:id` opdaterer en student.
- `DELETE /students/:id` sletter en student.

Ved succes bruges henholdsvis status 200, 201 eller 204.
Hvis en student ikke findes, bruges status 404.

-

## Courses

### GET /courses

- Hent alle courses fra databasen.
- Send dem tilbage med status 200.

### GET /courses/:id

- Hent id fra URL'en.
- Find course med det id.
- Send course med status 200.
- Hvis den ikke findes, send status 404.

### POST /courses

- Hent course-navn og teacherId fra body.
- Opret course i databasen.
- Send den nye course tilbage med status 201.

### PUT /courses/:id

- Hent course-id fra URL'en.
- Hent course-navn og teacherId fra body.
- Opdater course i databasen.
- Send den opdaterede course med status 200.
- Hvis course ikke findes, send status 404.

### PUT /courses/:id/teachers/:teacherId

- Hent course-id og teacher-id fra URL'en.
- Kontrollér at teacher findes.
- Opdater course, så den bruger teacherens id.
- Send den opdaterede course med status 200.
- Hvis course eller teacher ikke findes, send status 404.

### POST /courses/:id/students/:studentId

- Hent course-id og student-id fra URL'en.
- Opret forbindelsen i tabellen `course_students`.
- Send forbindelsen tilbage med status 200.
- Hvis noget går galt, send en fejlstatus.

### DELETE /courses/:id/students/:studentId

- Hent course-id og student-id fra URL'en.
- Slet forbindelsen fra `course_students`.
- Hvis forbindelsen findes, send status 204.
- Hvis forbindelsen ikke findes, send status 404.

### DELETE /courses/:id

- Hent course-id fra URL'en.
- Slet course fra databasen.
- Hvis den blev slettet, send status 204.
- Hvis den ikke findes, send status 404.
