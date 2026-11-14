// Database
import { pool } from "../db.js";

// ALl STUDENTS
export async function getAllStudents() {
  const result = await pool.query(/*sql*/ `SELECT * FROM students`);
  return result.rows;
}

// SINGLE STUDENT
export async function getStudentById(id) {
  const one = await pool.query(/*sql*/ `SELECT * FROM students WHERE id = $1`, [id]);

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// CREATE STUDENT
export async function createStudent(student) {
  const result = await pool.query(
    /*sql*/
    `INSERT INTO students
      (name, house_id, birthday, school_year)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, house_id, birthday, school_year`,
    [student.name, student.houseId, student.birthday, student.schoolYear],
  );
  return result.rows[0];
}

// UPDATE STUDENT
export async function updateStudent(id, student) {
  const result = await pool.query(
    /*sql*/
    `UPDATE students
     SET name = $1,
         house_id = $2,
         birthday = $3,
         school_year = $4
     WHERE id = $5
     RETURNING id, name, house_id, birthday, school_year`,
    [student.name, student.houseId, student.birthday, student.schoolYear, id],
  );
  if (result.rowCount === 0) return null;
  else {
    return result.rows[0];
  }
}

// DELETE STUDENT
export async function deleteStudent(id) {
  const result = await pool.query(
    /*sql*/
    `DELETE FROM students WHERE id = $1`,
    [id],
  );
  return result.rowCount;
}
