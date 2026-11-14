// Database
import { pool } from "../db.js";

// ALl TEACHERS
export async function getAllTeachers() {
  const result = await pool.query(/*sql*/ `    SELECT
      teachers.id,
      teachers.name,
      houses.name AS house,
      teachers.employment_start AS "employmentStart",
      teachers.currently_active AS "currentlyActive",
      teachers.deceased
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
        houses.name AS house,
        teachers.employment_start AS "employmentStart",
        teachers.currently_active AS "currentlyActive",
        teachers.deceased
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
  const result = await pool.query(
    /*sql*/
    `INSERT INTO teachers
      (name, house_id, employment_start, currently_active, deceased)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id`,
    [teacher.name, teacher.houseId, teacher.employmentStart, teacher.currentlyActive, teacher.deceased],
  );

  return result.rows[0];
}

// UPDATE TEACHER
export async function updateTeacher(id, teacher) {
  const result = await pool.query(
    /*sql*/
    `UPDATE teachers
     SET name = $1,
         house_id = $2,
         employment_start = $3,
         currently_active = $4,
         deceased = $5
     WHERE id = $6
     RETURNING id`,
    [teacher.name, teacher.houseId, teacher.employmentStart, teacher.currentlyActive, teacher.deceased, id],
  );

  if (result.rowCount === 0) return null;

  const updatedId = result.rows[0].id;
  return getTeacherById(updatedId);
}

// DELETE TEACHER
export async function deleteTeacher(id) {
  const result = await pool.query(/*sql*/ `DELETE FROM teachers WHERE id = $1`, [id]);
  return result.rowCount;
}
