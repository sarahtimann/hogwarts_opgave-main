import * as examsRepository from "../repositories/exams.repository.js";

import HTTPError from "../errorhandling/HTTPError.js";

import CreateExamData from "../dtos/createExam.dto.js";
import UpdateExamData from "../dtos/updateExam.dto.js";

// ALL EXAMS
export const getAllExams = async (req, res) => {
  const allExams = await examsRepository.getAllExams();
  console.log("allExams:", allExams);
  return res.status(200).json(allExams);
};

// SINGLE EXAM
export async function getSingleExam(req, res) {
  const id = req.params.id;
  const exam = await examsRepository.getExamById(id);

  if (exam) {
    return res.status(200).json(exam);
  }

  throw new HTTPError(404, "Exam not found.");
}

// CREATE EXAM
export async function createExam(req, res) {
  const data = req.body;
  const createExamData = CreateExamData.parse(data);

  const newExam = await examsRepository.createExam(createExamData);

  if (newExam) {
    return res.status(201).json(newExam);
  }

  throw new HTTPError(500, "Oops, something went wrong.");
}

// UPDATE EXAM
export async function updateExam(req, res) {
  const id = req.params.id;
  const data = req.body;

  const newExamData = UpdateExamData.parse(data);

  const updatedExam = await examsRepository.updateExam(id, newExamData);

  if (updatedExam) {
    return res.status(200).json(updatedExam);
  }

  throw new HTTPError(404, "No exam to update found.");
}

// DELETE EXAM
export async function deleteExam(req, res) {
  const id = req.params.id;

  const deletedExam = await examsRepository.deleteExam(id);

  if (deletedExam > 0) {
    return res.sendStatus(204);
  }

  throw new HTTPError(404, "No exam to delete found.");
}
