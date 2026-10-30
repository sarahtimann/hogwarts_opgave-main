# Hogwarts Course Management System

Dette projekt er et REST API til at håndtere houses, teachers, students og courses på Hogwarts.

Projektet gør det muligt at oprette, hente, opdatere og slette data samt håndtere relationer mellem courses og students og mellem courses og teachers.

## Teknologier

Projektet er lavet med:

- Node.js
- Express
- PostgreSQL
- JavaScript
- Bruno til API-tests

## Installation

1. Klon repositoriet fra GitHub.
2. Åbn projektmappen i VS Code.
3. Installer packages:

```bash
npm install
```

4. Opret en `.env`-fil i projektets rodmappe med de nødvendige databaseoplysninger.

Du kan tage udgangspunkt i `.env.example`.

5. Sørg for, at PostgreSQL kører, og at databasen er oprettet.

6. Start serveren:

```bash
npm start
```

Serveren kører på:

```text
http://localhost:3001
```

## Database

Projektet bruger PostgreSQL som database.

Databasen indeholder følgende tabeller:

- houses
- teachers
- students
- courses
- course_students

Tabellen `course_students` bruges som junctiontabel mellem courses og students, så et course kan have flere students, og en student kan være tilmeldt flere courses.

SQL-koden til at oprette tabellerne og indsætte eksempeldata findes i `schema.sql`.

## Projektstruktur og arkitektur

Projektet er opdelt i routers, controllers og repositories.

Læs mere om, hvad de enkelte gør i pseudocode.md.

## API Endpoints

### Houses

| Method | Endpoint      | Beskrivelse        |
| ------ | ------------- | ------------------ |
| GET    | `/houses`     | Henter alle houses |
| GET    | `/houses/:id` | Henter ét house    |

### Teachers

| Method | Endpoint        | Beskrivelse          |
| ------ | --------------- | -------------------- |
| GET    | `/teachers`     | Henter alle teachers |
| GET    | `/teachers/:id` | Henter én teacher    |
| POST   | `/teachers`     | Opretter en teacher  |
| PUT    | `/teachers/:id` | Opdaterer en teacher |
| DELETE | `/teachers/:id` | Sletter en teacher   |

### Students

| Method | Endpoint        | Beskrivelse          |
| ------ | --------------- | -------------------- |
| GET    | `/students`     | Henter alle students |
| GET    | `/students/:id` | Henter én student    |
| POST   | `/students`     | Opretter en student  |
| PUT    | `/students/:id` | Opdaterer en student |
| DELETE | `/students/:id` | Sletter en student   |

### Courses

| Method | Endpoint                           | Beskrivelse                       |
| ------ | ---------------------------------- | --------------------------------- |
| GET    | `/courses`                         | Henter alle courses               |
| GET    | `/courses/:id`                     | Henter ét course                  |
| POST   | `/courses`                         | Opretter et course                |
| PUT    | `/courses/:id`                     | Opdaterer et course               |
| PUT    | `/courses/:id/teachers/:teacherId` | Ændrer teacher på et course       |
| POST   | `/courses/:id/students/:studentId` | Tilføjer en student til et course |
| DELETE | `/courses/:id/students/:studentId` | Fjerner en student fra et course  |
| DELETE | `/courses/:id`                     | Sletter et course                 |

## API Testing med Bruno

API'et kan testes med Bruno.

1. Start serveren med `npm start`.
2. Åbn Bruno.
3. Åbn projektets Bruno collection.
4. Vælg det endpoint, du vil teste.
5. Send requesten og kontrollér statuskode og response.
