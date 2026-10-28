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
  const result = await pool.query("INSERT INTO courses (name, teacher, students) VALUES ($1, $2, $3) RETURNING name, teacher, students", [
    course.name,
    course.teacher,
    course.students,
  ]);
  return result.rows[0];
}

// UPDATE COURSE