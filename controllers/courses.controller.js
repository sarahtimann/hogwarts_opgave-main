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

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}

// UPDATE COURSE
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
    if (deletedCourse.rowCount === 0) return res.sendStatus(404);

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
}
