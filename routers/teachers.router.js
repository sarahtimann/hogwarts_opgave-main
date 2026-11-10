import express from "express";
import * as controller from "../controllers/teachers.controller.js";

const router = express.Router();

//GET all teachers
router.get("/", controller.getAllTeachers);

// GET single teacher by ID
router.get("/:id", controller.getSingleTeacher);

//CREATE new teacher
router.post("/", controller.createTeacher);

// UPDATE an existing teacher
router.put("/:id", controller.updateTeacher);

// DELETE single teacher
router.delete("/:id", controller.deleteTeacher);

export default router;
