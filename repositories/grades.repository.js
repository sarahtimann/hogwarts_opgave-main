// Database
import { pool } from "../db.js";

// ALL GRADES
export async function getAllGrades() {
  const result = await pool.query(/*sql*/ `SELECT * FROM grades`);

  return result.rows;
}

// SINGLE GRADE
export async function getGradeById(id) {
  const one = await pool.query(
    /*sql*/ `SELECT * FROM grades
      WHERE id = $1`,
    [id],
  );

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}
