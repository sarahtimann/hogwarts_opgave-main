import * as repository from "../repositories/teachers.repository.js";

// ALL TEACHERS
export const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await repository.getAllTeachers();
    console.log("allTeachers:", allTeachers);
    res.json(allTeachers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
};

// SINGLE TEACHER
export async function getSingleTeacher(req, res) {
  try {
    const id = req.params.id;
    const teacher = await repository.getTeacherById(id);

    if (teacher) {
      res.status(200).json(teacher);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// CREATE TEACHER
export async function createTeacher(req, res) {
  const teacher = req.body;
  try {
    const newTeacher = await repository.createTeacher(teacher);
    res.status(201).json(newTeacher);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error", code: err.code });
  }
}

// UPDATE TEACHER
export async function updateTeacher(req, res) {
  const teacher = req.body;
  const id = req.params.id;

  try {
    const updatedTeacher = await repository.updateTeacher(id, teacher);

    if (updatedTeacher) {
      res.status(200).json(updatedTeacher);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// DELETE TEACHER
export async function deleteTeacher(req, res) {
  const id = req.params.id;
  try {
    const deletedTeacher = await repository.deleteTeacher(id);
    if (deletedTeacher.rowCount === 0) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}
