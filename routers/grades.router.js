import express from "express";
import * as gradeController from "../controllers/grades.controller.js";

const router = express.Router();

// GET all grades
router.get("/", gradeController.getAllGrades);

// GET single grade by ID
router.get("/:id", gradeController.getSingleGrade);

export default router;
