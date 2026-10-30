import express from "express";
import * as studentsController from "../controllers/students.controller.js";

const studentsRouter = express.Router();

// GET all students
studentsRouter.get("/students", studentsController.getAllStudents);

// GET single student by ID
studentsRouter.get("/students/:id", studentsController.getSingleStudent);

export default studentsRouter;
