import * as coursesRepository from "../repositories/courses.repository.js";

import HTTPError from "../errorhandling/HTTPError.js";

import UpdateCourseData from "../dtos/updateCourse.dto.js";
import CreateCourseData from "../dtos/createCourse.dto.js";

// ALL COURSES
export const getAllCourses = async (req, res) => {
  const allCourses = await coursesRepository.getAllCourses();
  console.log("allCourses:", allCourses);
  return res.status(200).json(allCourses);
};

// SINGLE COURSE
export async function getSingleCourse(req, res) {
  const id = req.params.id;
  const course = await coursesRepository.getCourseById(id);

  if (course) {
    return res.status(200).json(course);
  }
  throw new HTTPError(404, "Course not found.");
}

// CREATE COURSE
export async function createCourse(req, res) {
  const data = req.body;
  const createCourseData = CreateCourseData.parse(data);

  const newCourse = await coursesRepository.createCourse(createCourseData);
  if (newCourse) {
    return res.status(201).json(newCourse);
  }
  throw new HTTPError(500, "Oops, something went wrong.");
}

// UPDATE EXISTING COURSE
export async function updateCourse(req, res) {
  const id = req.params.id;
  const data = req.body;

  const newCourseData = UpdateCourseData.parse(data);

  const updatedCourse = await coursesRepository.updateCourse(id, newCourseData);

  if (updatedCourse) {
    return res.status(200).json(updatedCourse);
  }
  throw new HTTPError(404, "No course to update found.");
}

// DELETE SINGLE COURSE
export async function deleteCourse(req, res) {
  const id = req.params.id;

  const deletedCourse = await coursesRepository.deleteCourse(id);

  if (deletedCourse > 0) return res.sendStatus(204);
  {
    throw new HTTPError(404, "No course to delete found.");
  }
}

// SET TEACHER FOR EXISTING COURSE
export async function setTeacherForCourse(req, res) {
  const courseId = req.params.id;
  const teacherId = req.params.teacherId;

  const updatedCourse = await coursesRepository.setTeacherForCourse(courseId, teacherId);

  if (updatedCourse) {
    return res.status(200).json(updatedCourse);
  }

  throw new HTTPError(404, "Course or teacher not found.");
}

// ADD STUDENT TO EXISTING COURSE
export async function addStudentToCourse(req, res) {
  const courseId = req.params.id;
  const studentId = req.params.studentId;

  const result = await coursesRepository.addStudentToCourse(courseId, studentId);

  if (result) {
    return res.status(200).json(result);
  }

  throw new HTTPError(404, "Course or student not found.");
}

// REMOVE STUDENT FROM EXISTING COURSE
export async function removeStudentFromCourse(req, res) {
  const courseId = req.params.id;
  const studentId = req.params.studentId;

  const deletedStudent = await coursesRepository.removeStudentFromCourse(courseId, studentId);

  if (deletedStudent > 0) {
    return res.sendStatus(204);
  }

  throw new HTTPError(404, "Course or student not found.");
}
