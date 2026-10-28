// const express = require("express");
import express from "express";

// const pool = require("./db");
// Database
import { pool } from "./db.js";

// import * as housesRepository from "./repositories/houses.repository.js";
import * as houseController from "./controllers/houses.controller.js";
import * as coursesController from "./controllers/courses.controller.js";
import * as studentsController from "./controllers/students.controller.js";
import * as teachersController from "./controllers/teachers.controller.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));
console.log("ROOT ROUTE ER INDLÆST");

//TEACHERS

//GET all teachers
app.get("/teachers", teachersController.getAllTeachers);

// GET single teacher by ID
app.get("/teachers/:id", teachersController.getSingleTeacher);

//CREATE new teacher
app.post("/teachers", teachersController.createTeacher);

// UPDATE an existing teacher
app.put("/teachers/:id", teachersController.updateTeacher);

// DELETE single teacher
app.delete("/teachers/:id", teachersController.deleteTeacher);

//STUDENTS

// GET all students
app.get("/students", studentsController.getAllStudents);

// GET single student by ID
app.get("/students/:id", studentsController.getSingleStudent);

// CREATE new student
app.post("/students", studentsController.createStudent);

// UPDATE an existing student
app.put("/students/:id", studentsController.updateStudent);

// DELETE single student
app.delete("/students/:id", studentsController.deleteStudent);

//HOUSES

// GET all houses
app.get("/houses", houseController.getAllHouses);

// GET single house by ID
app.get("/houses/:id", houseController.getSingleHouse);

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

// GET all courses
app.get("/courses", coursesController.getAllCourses);

// GET single course by ID
app.get("/courses/:id", coursesController.getSingleCourse);

// CREATE new course
app.post("/courses", coursesController.createCourse);

// UPDATE an existing course
app.put("/courses/:id", coursesController.updateCourse);

// DELETE single course
app.delete("/courses/:id", coursesController.deleteCourse);

app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));
