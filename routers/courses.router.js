import express from "express";
import * as coursesController from "../controllers/courses.controller.js";

const coursesRouter = express.Router();

// GET all courses
coursesRouter.get("/", coursesController.getAllCourses);

// GET single course by ID
coursesRouter.get("/:id", coursesController.getSingleCourse);

export default coursesRouter;
