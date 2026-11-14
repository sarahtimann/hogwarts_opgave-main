// const express = require("express");
import express from "express";

// importerer errorhandler
import errorhandler from "./errorhandling/errorhandler.js";

// const pool = require("./db");
// Database
import { pool } from "./db.js";

// import * as housesRepository from "./repositories/houses.repository.js";
// import * as houseController from "./controllers/houses.controller.js";
// import * as coursesController from "./controllers/courses.controller.js";
// import * as studentsController from "./controllers/students.controller.js";
// import * as teachersController from "./controllers/teachers.controller.js";

import housesRouter from "./routers/houses.router.js";
import coursesRouter from "./routers/courses.router.js";
import studentsRouter from "./routers/students.router.js";
import teachersRouter from "./routers/teachers.router.js";
import gradesRouter from "./routers/grades.router.js";
import examsRouter from "./routers/exams.router.js";

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

// GRADES
app.use("/grades", gradesRouter);

// HOUSES
app.use("/houses", housesRouter);

//COURSES
app.use("/courses", coursesRouter);

// EXAMS
app.use("/exams", examsRouter);

// TESTS
app.post("/courses/test", (req, res) => {
  res.send("COURSES POST VIRKER");
});

// PORT
app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));

// ERROR HANDLER
app.use(errorhandler);
