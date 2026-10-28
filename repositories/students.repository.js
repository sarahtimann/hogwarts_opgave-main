// Database
import { pool } from "../db.js";

// ALl STUDENTS
export async function getAllStudents() {
  const result = await pool.query("SELECT * FROM students");
  return result.rows;
}

// SINGLE STUDENT
export async function getStudentById(id) {
  const one = await pool.query("SELECT * FROM students WHERE id = $1", [id]);

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// CREATE STUDENT
export async function createStudent(student) {
  const result = await pool.query("INSERT INTO students (name, house, year) VALUES ($1, $2, $3) RETURNING name, house, year", [
    student.name,
    student.house,
    student.year,
  ]);
  return result.rows[0];
}
