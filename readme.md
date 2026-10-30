# Hogwarts Course Management System

## Projektbeskrivelse

Dette projekt er et REST API til administration af Hogwarts' kurser, lærere, elever og kollegier.

API'et er udviklet med Node.js, Express og PostgreSQL. Projektet bruger controllers og repositories til at adskille ansvaret for håndtering af HTTP-forespørgsler og databaseforespørgsler.

## Teknologier

- Node.js
- Express
- PostgreSQL
- JavaScript med ES-moduler
- Bruno til test af API'et

## Projektstruktur

- `index.js`: Indeholder API-routes og starter serveren.
- `controllers/`: Håndterer requests og responses.
- `repositories/`: Indeholder SQL-forespørgsler til databasen.
- `db.js`: Opretter forbindelsen til PostgreSQL.
- `schema.sql`: Opretter databasens tabeller og indsætter eksempeldata.
- `.env.example`: Viser, hvilke miljøvariabler projektet har brug for.
- `pseudocode/`: Indeholder pseudocode for API'ets endpoints.
- `bruno/`: Indeholder Bruno-requests til test af API'et.

## Installation og opstart

1. Hent projektet fra GitHub.
2. Åbn projektmappen i VS Code.
3. Installer afhængighederne:
   npm install

4. Opret en `.env`-fil med udgangspunkt i `.env.example`.
5. Udfyld de nødvendige oplysninger til PostgreSQL-forbind
