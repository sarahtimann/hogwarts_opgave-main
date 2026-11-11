import * as repository from "../repositories/students.repository.js";

import HTTPError from "../errorhandling/HTTPError.js";

// ALL STUDENTS
export const getAllStudents = async (req, res) => {
  const allStudents = await repository.getAllStudents();
  console.log("allStudents:", allStudents);
  res.json(allStudents);
};

// SINGLE STUDENT
export async function getSingleStudent(req, res) {
  const id = req.params.id;
  const student = await repository.getStudentById(id);

  if (student) {
    return res.status(200).json(student);
  }
  throw new HTTPError(404, "Student not found.");
}

// CREATE STUDENT
export async function createStudent(req, res) {
  const student = req.body;
  const newStudent = await repository.createStudent(student);
  if (newStudent) {
    return res.status(201).json(newStudent);
  }
  throw new HTTPError(500, "Oops, something went wrong.");
}

// UPDATE STUDENT
export async function updateStudent(req, res) {
  const student = req.body;
  const id = req.params.id;

  const updatedStudent = await repository.updateStudent(id, student);

  if (updatedStudent) {
    return res.status(200).json(updatedStudent);
  }
  throw new HTTPError(404, "Student not found.");
}

// DELETE STUDENT
export async function deleteStudent(req, res) {
  const id = req.params.id;

  const deletedStudent = await repository.deleteStudent(id);

  if (deletedStudent > 0) return res.sendStatus(204);

  {
    throw new HTTPError(404, "Student not found.");
  }
}
