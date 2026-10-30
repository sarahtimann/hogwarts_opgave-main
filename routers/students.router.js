import express from "express";
import * as studentsController from "../controllers/students.controller.js";

const studentsRouter = express.Router();

// GET all students
studentsRouter.get("/", studentsController.getAllStudents);

// GET single student by ID
studentsRouter.get("/:id", studentsController.getSingleStudent);

// CREATE new student
studentsRouter.post("/", studentsController.createStudent);

// UPDATE an existing student
studentsRouter.put("/:id", studentsController.updateStudent);

// DELETE single student
studentsRouter.delete("/:id", studentsController.deleteStudent);

export default studentsRouter;
