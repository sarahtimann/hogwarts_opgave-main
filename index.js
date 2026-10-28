// const express = require("express");
import express from "express";

// const pool = require("./db");
// Database
import { pool } from "./db.js";

// import * as housesRepository from "./repositories/houses.repository.js";
import * as houseController from "./controllers/houses.controller.js";
import * as coursesController from "./controllers/courses.controller.js";
import * as studentsController from "./controllers/students.controller.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World"));
console.log("ROOT ROUTE ER INDLÆST");

//TEACHERS

//GET all teachers
app.get("/teachers", async (req, res) => {
  try {
    const allTeachers = await teachersRepository.getAllTeachers();
    console.log("allTeachers:", allTeachers);
    res.json(allTeachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
});

// GET single teacher by ID
app.get("/teachers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const teacher = await teachersRepository.getTeacherById(id);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

//CREATE new teacher
app.post("/teachers", async (req, res) => {
  const teacher = req.body;

  try {
    const result = await pool.query("INSERT INTO teachers (name, house) VALUES ($1, $2) RETURNING name, house", [teacher.name, teacher.house]);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// UPDATE an existing teacher
app.put("/teachers/:id", async (req, res) => {
  const teacher = req.body;
  const id = req.params.id;

  try {
    const result = await pool.query("UPDATE teachers SET name = $1, house = $2 WHERE id = $3 RETURNING name, house, id", [
      teacher.name,
      teacher.house,
      id,
    ]);

    if (result.rowCount === 0) return res.sendStatus(404);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// DELETE single teacher
app.delete("/teachers/:id", async (req, res) => {
  try {
    const del = await pool.query("DELETE FROM teachers WHERE id = $1", [req.params.id]);

    if (del.rowCount === 0) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

//STUDENTS

// GET all students
app.get("/students", studentsController.getAllStudents);

// GET single student by ID
app.get("/students/:id", studentsController.getSingleStudent);

// CREATE new student
app.post("/students", async (req, res) => {
  const student = req.body;

  try {
    const result = await pool.query("INSERT INTO students (name, house, year) VALUES ($1, $2, $3) RETURNING name, house, year", [
      student.name,
      student.house,
      student.year,
    ]);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// UPDATE an existing student
app.put("/students/:id", async (req, res) => {
  const student = req.body;
  const id = req.params.id;

  try {
    const result = await pool.query("UPDATE students SET name = $1, house = $2, year = $3 WHERE id = $4 RETURNING name, house, year, id", [
      student.name,
      student.house,
      student.year,
      id,
    ]);

    if (result.rowCount === 0) return res.sendStatus(404);

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// DELETE single student
app.delete("/students/:id", async (req, res) => {
  try {
    const del = await pool.query("DELETE FROM students WHERE id = $1", [req.params.id]);

    if (del.rowCount === 0) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

//HOUSES

// GET all houses
app.get("/houses", houseController.getAllHouses);

// GET single house by ID
app.get("/houses/:id", houseController.getSingleHouse);

// CREATE new house
app.post("/houses", async (req, res) => {
  const house = req.body;

  try {
    const result = await pool.query("INSERT INTO houses (name, color, founder) VALUES ($1, $2, $3) RETURNING name, color, founder", [
      house.name,
      house.color,
      house.founder,
    ]);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// UPDATE an existing house
app.put("/houses/:id", async (req, res) => {
  const house = req.body;
  const id = req.params.id;

  try {
    const result = await pool.query("UPDATE houses SET name = $1, color = $2, founder = $3 WHERE id = $4 RETURNING name, color, founder, id", [
      house.name,
      house.color,
      house.founder,
      id,
    ]);

    if (result.rowCount === 0) return res.sendStatus(404);

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// DELETE single house
app.delete("/houses/:id", async (req, res) => {
  try {
    const del = await pool.query("DELETE FROM houses WHERE id = $1", [req.params.id]);

    if (del.rowCount === 0) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

//COURSES

// GET all courses
app.get("/courses", coursesController.getAllCourses);

// GET single course by ID
app.get("/courses/:id", coursesController.getSingleCourse);

// CREATE new course
app.post("/courses", async (req, res) => {
  const course = req.body;

  try {
    const result = await pool.query("INSERT INTO courses (name, teacher, students) VALUES ($1, $2, $3) RETURNING name, teacher, students", [
      course.name,
      course.teacher,
      course.students,
    ]);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// UPDATE an existing course
app.put("/courses/:id", async (req, res) => {
  const course = req.body;
  const id = req.params.id;

  try {
    const result = await pool.query("UPDATE courses SET name = $1, teacher = $2, students = $3 WHERE id = $4 RETURNING name, teacher, students, id", [
      course.name,
      course.teacher,
      course.students,
      id,
    ]);

    if (result.rowCount === 0) return res.sendStatus(404);

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// DELETE single course
app.delete("/courses/:id", async (req, res) => {
  try {
    const del = await pool.query("DELETE FROM courses WHERE id = $1", [req.params.id]);

    if (del.rowCount === 0) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => console.log(`Server kører på http://localhost:${port}`));
