import * as z from "zod";

const CreateCourseDto = z.object({
  name: z.string(),
  teacherId: z.int(),
});

export default CreateCourseDto;
