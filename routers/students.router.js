import express from "express";
import * as studentsController from "../controllers/students.controller.js";

const router = express.Router();

// GET all students
router.get("/", studentsController.getAllStudents);

// GET single student by ID
router.get("/:id", studentsController.getSingleStudent);

// CREATE new student
router.post("/", studentsController.createStudent);

// UPDATE an existing student
router.put("/:id", studentsController.updateStudent);

// DELETE single student
router.delete("/:id", studentsController.deleteStudent);

export default router;
