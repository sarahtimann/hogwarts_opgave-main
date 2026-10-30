import * as coursesRepository from "../repositories/courses.repository.js";

// ALL COURSES
export const getAllCourses = async (req, res) => {
  try {
    const allCourses = await coursesRepository.getAllCourses();
    console.log("allCourses:", allCourses);
    res.json(allCourses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

// SINGLE COURSE
export async function getSingleCourse(req, res) {
  try {
    const id = req.params.id;
    const course = await coursesRepository.getCourseById(id);

    if (course) {
      res.status(200).json(course);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// CREATE COURSE
export async function createCourse(req, res) {
  const course = req.body;
  try {
    const newCourse = await coursesRepository.createCourse(course);

    res.status(201).json(newCourse);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// UPDATE EXISTING COURSE
export async function updateCourse(req, res) {
  const course = req.body;
  const id = req.params.id;

  try {
    const updatedCourse = await coursesRepository.updateCourse(id, course);

    if (updatedCourse) {
      res.status(200).json(updatedCourse);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// DELETE SINGLE COURSE
export async function deleteCourse(req, res) {
  try {
    const id = req.params.id;

    const deletedCourse = await coursesRepository.deleteCourse(id);
    if (deletedCourse === 0) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// SET TEACHER FOR EXISTING COURSE
export async function setTeacherForCourse(req, res) {
  const courseId = req.params.id;
  const teacherId = req.params.teacherId;

  try {
    const updatedCourse = await coursesRepository.setTeacherForCourse(courseId, teacherId);

    if (updatedCourse) {
      res.status(200).json(updatedCourse);
    } else {
      res.status(404).json({
        error: "Course or teacher not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// ADD STUDENT TO EXISTING COURSE
export async function addStudentToCourse(req, res) {
  const courseId = req.params.id;
  const studentId = req.params.studentId;

  try {
    const result = await coursesRepository.addStudentToCourse(courseId, studentId);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// REMOVE STUDENT FROM EXISTING COURSE
export async function removeStudentFromCourse(req, res) {
  const courseId = req.params.id;
  const studentId = req.params.studentId;

  try {
    const deletedStudent = await coursesRepository.removeStudentFromCourse(courseId, studentId);

    if (deletedStudent === 0) {
      return res.status(404).json({
        error: "Course or student not found",
      });
    }

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}
