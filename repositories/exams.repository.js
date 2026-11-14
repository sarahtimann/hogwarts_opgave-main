// Database
import { pool } from "../db.js";

// ALL EXAMS
export async function getAllExams() {
  const result = await pool.query(/*sql*/ `SELECT * FROM exams`);
  return result.rows;
}

// SINGLE EXAM
export async function getExamById(id) {
  const one = await pool.query(/*sql*/ `SELECT * FROM exams WHERE id = $1`, [id]);

  if (one.rowCount === 0) {
    return null;
  } else {
    return one.rows[0];
  }
}

// CREATE EXAM
export async function createExam(exam) {
  const result = await pool.query(
    /*sql*/ `INSERT INTO exams (course_id, student_id, grade_id)
     VALUES ($1, $2, $3)
     RETURNING id, course_id, student_id, grade_id`,
    [exam.courseId, exam.studentId, exam.gradeId],
  );

  return result.rows[0];
}

// UPDATE EXAM
export async function updateExam(id, exam) {
  const result = await pool.query(
    /*sql*/ `UPDATE exams
     SET course_id = $1,
         student_id = $2,
         grade_id = $3
     WHERE id = $4
     RETURNING id, course_id, student_id, grade_id`,
    [exam.courseId, exam.studentId, exam.gradeId, id],
  );

  if (result.rowCount === 0) {
    return null;
  } else {
    return result.rows[0];
  }
}

// DELETE EXAM
export async function deleteExam(id) {
  const result = await pool.query(/*sql*/ `DELETE FROM exams WHERE id = $1`, [id]);
  return result.rowCount;
}
