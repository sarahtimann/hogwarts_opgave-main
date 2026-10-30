// Database
import { pool } from "../db.js";

// ALl COURSES
export async function getAllCourses() {
  const result = await pool.query("SELECT * FROM courses");
  return result.rows;
}

// SINGLE COURSE
export async function getCourseById(id) {
  const one = await pool.query("SELECT * FROM courses WHERE id = $1", [id]);

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// CREATE COURSE
export async function createCourse(course) {
  const result = await pool.query(
    `INSERT INTO courses (name, teacher_id)
     VALUES ($1, $2)
     RETURNING id, name, teacher_id`,
    [course.name, course.teacherId],
  );

  return result.rows[0];
}

// UPDATE EXISTING COURSE
export async function updateCourse(id, course) {
  const result = await pool.query(
    `UPDATE courses
     SET name = $1, teacher_id = $2
     WHERE id = $3
     RETURNING id, name, teacher_id`,
    [course.name, course.teacherId, id],
  );

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

// DELETE SINGLE COURSE
export async function deleteCourse(id) {
  const result = await pool.query("DELETE FROM courses WHERE id = $1", [id]);
  return result.rowCount;
}

// SET TEACHER FOR EXISTING COURSE
export async function setTeacherForCourse(courseId, teacherId) {
  const teacherResult = await pool.query("SELECT name FROM teachers WHERE id = $1", [teacherId]);

  if (teacherResult.rowCount === 0) {
    return null;
  }

  const result = await pool.query(
    `UPDATE courses
   SET teacher_id = $1
   WHERE id = $2
   RETURNING id, name, teacher_id`,
    [teacherId, courseId],
  );

  if (result.rowCount === 0) {
    return null;
  }

  return result.rows[0];
}

// ADD STUDENT TO EXISTING COURSE
export async function addStudentToCourse(courseId, studentId) {
  const result = await pool.query("INSERT INTO course_students (course_id, student_id) VALUES ($1, $2) RETURNING course_id, student_id", [
    courseId,
    studentId,
  ]);

  return result.rows[0];
}

// REMOVE STUDENT FROM EXISTING COURSE
export async function removeStudentFromCourse(courseId, studentId) {
  const result = await pool.query("DELETE FROM course_students WHERE course_id = $1 AND student_id = $2", [courseId, studentId]);

  return result.rowCount;
}
