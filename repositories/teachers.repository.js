// Database
import { pool } from "../db.js";

// ALl TEACHERS
export async function getAllTeachers() {
  const result = await pool.query(/*sql*/ `SELECT
    teachers.id,
    teachers.name,
    houses.name AS house
FROM teachers
LEFT JOIN houses
ON teachers.house_id = houses.id`);
  return result.rows;
}

// SINGLE TEACHER
export async function getTeacherById(id) {
  const one = await pool.query(
    /*sql*/ `SELECT
    teachers.id,
    teachers.name,
    houses.name AS house
FROM teachers
LEFT JOIN houses
ON teachers.house_id = houses.id
WHERE teachers.id = $1`,
    [id],
  );

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// CREATE TEACHER
export async function createTeacher(teacher) {
  const result = await pool.query("INSERT INTO teachers (name, house_id) VALUES ($1, $2) RETURNING name, house_id", [teacher.name, teacher.houseId]);

  return result.rows[0];
}

// UPDATE TEACHER
export async function updateTeacher(id, teacher) {
  const result = await pool.query("UPDATE teachers SET name = $1, house_id = $2 WHERE id = $3 RETURNING id", [teacher.name, teacher.houseId, id]);

  if (result.rowCount === 0) return null;

  const updatedId = result.rows[0].id;
  return getTeacherById(updatedId);
}

// DELETE TEACHER
export async function deleteTeacher(id) {
  const result = await pool.query("DELETE FROM teachers WHERE id = $1", [id]);
  return result.rowCount;
}
