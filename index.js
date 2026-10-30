// const express = require("express");
import express from "express";

// const pool = require("./db");
// Database
import { pool } from "./db.js";

// import * as housesRepository from "./repositories/houses.repository.js";
// import * as houseController from "./controllers/houses.controller.js";
import * as coursesController from "./controllers/courses.controller.js";
import * as studentsController from "./controllers/students.controller.js";
// import * as teachersController from "./controllers/teachers.controller.js";

import housesRouter from "./routers/houses.router.js";
import coursesRouter from "./routers/courses.router.js";
import studentsRouter from "./routers/students.router.js";
import teachersRouter from "./routers/teachers.router.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));
console.log("ROOT ROUTE ER INDLÆST");

// app.post("/test", (req, res) => {
//   res.send("TEST ROUTE VIRKER");
// });

//TEACHERS

app.use("/teachers", teachersRouter);

//STUDENTS

app.use("/students", studentsRouter);

// HOUSES

app.use("/houses", housesRouter);

// CREATE new house
// app.post("/houses", async (req, res) => {
//   const house = req.body;

//   try {
//     const result = await pool.query("INSERT INTO houses (name, color, founder) VALUES ($1, $2, $3) RETURNING name, color, founder", [
//       house.name,
//       house.color,
//       house.founder,
//     ]);

//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// UPDATE an existing house
// app.put("/houses/:id", async (req, res) => {
//   const house = req.body;
//   const id = req.params.id;

//   try {
//     const result = await pool.query("UPDATE houses SET name = $1, color = $2, founder = $3 WHERE id = $4 RETURNING name, color, founder, id", [
//       house.name,
//       house.color,
//       house.founder,
//       id,
//     ]);

//     if (result.rowCount === 0) return res.sendStatus(404);

//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Database error" });
//   }
// });

// DELETE single house
// app.delete("/houses/:id", async (req, res) => {
//   try {
//     const del = await pool.query("DELETE FROM houses WHERE id = $1", [req.params.id]);

//     if (del.rowCount === 0) return res.sendStatus(404);

//     res.sendStatus(204);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Database error" });
//   }
// });

//COURSES

app.use("/courses", coursesRouter);

// TESTS

app.post("/courses/test", (req, res) => {
  res.send("COURSES POST VIRKER");
});

// PORT

app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));
