// Database
import { pool } from "../db.js";

// ALl TEACHERS
export async function getAllTeachers() {
  const result = await pool.query("SELECT * FROM teachers");
  return result.rows;
}

// SINGLE TEACHER
export async function getTeacherById(id) {
  const one = await pool.query("SELECT * FROM teachers WHERE id = $1", [id]);

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// CREATE TEACHER
export async function createTeacher(teacher) {
  const result = await pool.query("INSERT INTO teachers (name, house) VALUES ($1, $2) RETURNING name, house", [teacher.name, teacher.house]);

return result.rows[0];
  }