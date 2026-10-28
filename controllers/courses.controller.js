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
