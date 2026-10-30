import express from "express";
import * as coursesController from "../controllers/courses.controller.js";

const coursesRouter = express.Router();

// GET all courses
coursesRouter.get("/", coursesController.getAllCourses);

// GET single course by ID
coursesRouter.get("/:id", coursesController.getSingleCourse);

// CREATE new course
coursesRouter.post("/", coursesController.createCourse);

// UPDATE an existing course
coursesRouter.put("/:id", coursesController.updateCourse);

// SET teacher for existing course // NOT WORKING
coursesRouter.put("/:id/teachers/:teacherId", coursesController.setTeacherForCourse);

// ADD student to existing course // NOT WORKING
coursesRouter.post("/:id/students/:studentId", coursesController.addStudentToCourse);

// REMOVE student from existing course // NOT WORKING
coursesRouter.delete("/:id/students/:studentId", coursesController.removeStudentFromCourse);

// DELETE single course
coursesRouter.delete("/:id", coursesController.deleteCourse);

export default coursesRouter;
