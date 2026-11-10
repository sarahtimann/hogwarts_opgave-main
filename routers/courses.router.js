import express from "express";
import * as coursesController from "../controllers/courses.controller.js";

const router = express.Router();

// GET all courses
router.get("/", coursesController.getAllCourses);

// GET single course by ID
router.get("/:id", coursesController.getSingleCourse);

// CREATE new course
router.post("/", coursesController.createCourse);

// UPDATE an existing course
router.put("/:id", coursesController.updateCourse);

// SET teacher for existing course // NOT WORKING
router.put("/:id/teachers/:teacherId", coursesController.setTeacherForCourse);

// ADD student to existing course // NOT WORKING
router.post("/:id/students/:studentId", coursesController.addStudentToCourse);

// REMOVE student from existing course // NOT WORKING
router.delete("/:id/students/:studentId", coursesController.removeStudentFromCourse);

// DELETE single course
router.delete("/:id", coursesController.deleteCourse);

export default router;
