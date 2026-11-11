import * as repository from "../repositories/teachers.repository.js";

import HTTPError from "../errorhandling/HTTPError.js";

// ALL TEACHERS
export const getAllTeachers = async (req, res) => {
  const allTeachers = await repository.getAllTeachers();
  console.log("allTeachers:", allTeachers);
  res.json(allTeachers);
};

// SINGLE TEACHER
export async function getSingleTeacher(req, res) {
  const id = req.params.id;
  const teacher = await repository.getTeacherById(id);

  if (teacher) {
    return res.status(200).json(teacher);
  }
  throw new HTTPError(404, "Teacher not found.");
}

// CREATE TEACHER
export async function createTeacher(req, res) {
  const teacher = req.body;
  const newTeacher = await repository.createTeacher(teacher);
  if (newTeacher) {
    return res.status(201).json(newTeacher);
  }
  throw new HTTPError(500, "Oops, something went wrong.");
}

// UPDATE TEACHER
export async function updateTeacher(req, res) {
  const teacher = req.body;
  const id = req.params.id;

  const updatedTeacher = await repository.updateTeacher(id, teacher);

  if (updatedTeacher) {
    return res.status(200).json(updatedTeacher);
  }
  throw new HTTPError(404, "Teacher not found.");
}

// DELETE TEACHER
export async function deleteTeacher(req, res) {
  const id = req.params.id;

  const deletedTeacher = await repository.deleteTeacher(id);

  if (deletedTeacher > 0) return res.sendStatus(204);

  {
    throw new HTTPError(404, "Teacher not found.");
  }
}
