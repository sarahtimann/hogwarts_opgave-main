import * as studentsRepository from "../repositories/students.repository.js";

// ALL STUDENTS
export const getAllStudents = async (req, res) => {
  try {
    const allStudents = await studentsRepository.getAllStudents();
    console.log("allStudents:", allStudents);
    res.json(allStudents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

// SINGLE STUDENT
export async function getSingleStudent(req, res) {
  try {
    const id = req.params.id;
    const student = await studentsRepository.getStudentById(id);

    if (student) {
      res.status(200).json(student);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// CREATE STUDENT
export async function createStudent(req, res) {
  const student = req.body;
  try {
    const newStudent = await studentsRepository.createStudent(student);

    res.status(201).json(newStudent);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// UPDATE STUDENT
export async function updateStudent(req, res) {
  const student = req.body;
  const id = req.params.id;

  try {
    const updatedStudent = await studentsRepository.updateStudent(id, student);

    if (updatedStudent) {
      res.status(200).json(updatedStudent);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// DELETE STUDENT
export async function deleteStudent(req, res) {
  const id = req.params.id;

  try {
    const deletedStudent = await pool.query("DELETE FROM students WHERE id = $1", [req.params.id]);

    if (deletedStudent.rowCount === 0) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}
