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
