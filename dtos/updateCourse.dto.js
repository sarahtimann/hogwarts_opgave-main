import * as z from "zod";

const UpdateCourseDto = z.object({
  id: z.int().min(0),
  name: z.string(),
  teacherId: z.int(),
});

export default UpdateCourseDto;
