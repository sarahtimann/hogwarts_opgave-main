import * as repository from "../repositories/teachers.repository.js";

import HTTPError from "../errorhandling/HTTPError.js";

import UpdateTeacherData from "../dtos/updateTeacher.dto.js";
import CreateTeacherData from "../dtos/createTeacher.dto.js";

// ALL TEACHERS
export const getAllTeachers = async (req, res) => {
  const allTeachers = await repository.getAllTeachers();
  console.log("allTeachers:", allTeachers);
  return res.status(200).json(allTeachers);
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
  const data = req.body;
  const createTeacherData = CreateTeacherData.parse(data);

  const newTeacher = await repository.createTeacher(createTeacherData);
  if (newTeacher) {
    return res.status(201).json(newTeacher);
  }
  throw new HTTPError(500, "Oops, something went wrong.");
}

// UPDATE TEACHER
export async function updateTeacher(req, res) {
  const id = req.params.id;
  const data = req.body;

  const newTeacherData = UpdateTeacherData.parse(data);

  const updatedTeacher = await repository.updateTeacher(id, newTeacherData);

  if (updatedTeacher) {
    return res.status(200).json(updatedTeacher);
  }
  throw new HTTPError(404, "No teacher to update found.");
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
