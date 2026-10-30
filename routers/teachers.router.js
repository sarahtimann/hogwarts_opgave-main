import express from "express";
import * as teachersController from "../controllers/teachers.controller.js";

const teachersRouter = express.Router();

//GET all teachers
teachersRouter.get("/", teachersController.getAllTeachers);

// GET single teacher by ID
teachersRouter.get("/:id", teachersController.getSingleTeacher);

export default teachersRouter;
