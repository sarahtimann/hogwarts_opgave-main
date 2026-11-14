import * as z from "zod";

const CreateExamDto = z.object({
  courseId: z.int(),
  studentId: z.int(),
  gradeId: z.int(),
});

export default CreateExamDto;
