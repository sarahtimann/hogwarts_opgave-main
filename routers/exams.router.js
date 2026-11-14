import express from "express";
import * as examController from "../controllers/exams.controller.js";

const router = express.Router();

// GET all exams
router.get("/", examController.getAllExams);

// GET single exam by ID
router.get("/:id", examController.getSingleExam);

// CREATE new exam
router.post("/", examController.createExam);

// UPDATE an existing exam
router.put("/:id", examController.updateExam);

// DELETE single exam
router.delete("/:id", examController.deleteExam);

export default router;
