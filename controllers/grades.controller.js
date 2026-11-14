import * as gradesRepository from "../repositories/grades.repository.js";

import HTTPError from "../errorhandling/HTTPError.js";

// ALL GRADES
export const getAllGrades = async (req, res) => {
  const allGrades = await gradesRepository.getAllGrades();
  console.log("allGrades:", allGrades);
  return res.status(200).json(allGrades);
};

// SINGLE GRADE
export async function getSingleGrade(req, res) {
  const id = req.params.id;
  const grade = await gradesRepository.getGradeById(id);

  if (grade) {
    return res.status(200).json(grade);
  }

  throw new HTTPError(404, "Grade not found.");
}
