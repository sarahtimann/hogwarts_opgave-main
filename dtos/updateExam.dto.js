import * as z from "zod";

const UpdateExamDto = z.object({
  courseId: z.int(),
  studentId: z.int(),
  gradeId: z.int(),
});

export default UpdateExamDto;
