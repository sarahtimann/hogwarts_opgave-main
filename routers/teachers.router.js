import express from "express";
import * as teachersController from "../controllers/teachers.controller.js";

const teachersRouter = express.Router();

//GET all teachers
teachersRouter.get("/", teachersController.getAllTeachers);

// GET single teacher by ID
teachersRouter.get("/:id", teachersController.getSingleTeacher);

//CREATE new teacher
teachersRouter.post("/", teachersController.createTeacher);

// UPDATE an existing teacher
teachersRouter.put("/:id", teachersController.updateTeacher);

// DELETE single teacher
teachersRouter.delete("/:id", teachersController.deleteTeacher);

export default teachersRouter;
