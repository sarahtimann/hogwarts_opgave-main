import * as teachersRepository from "../repositories/teachers.repository.js";

// ALL TEACHERS
export const getAllTeachers = async (req, res) => {
      try {
    const allTeachers = await teachersRepository.getAllTeachers();
    console.log("allTeachers:", allTeachers);
    res.json(allTeachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
}

// SINGLE TEACHER
export async function getSingleTeacher(req, res) {
      try {
    const id = req.params.id;
    const teacher = await teachersRepository.getTeacherById(id);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// CREATE TEACHER
export async function createTeacher(req, res) {
  const teacher = req.body;
  try {
    const newTeacher = await teachersRepository.createTeacher(teacher);
    res.status(201).json(newTeacher);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
}