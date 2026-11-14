import * as z from "zod";

const UpdateStudentDto = z.object({
  name: z.string(),
  houseId: z.int(),
  birthday: z.coerce.date(),
  schoolYear: z.int().min(1).max(7),
});

export default UpdateStudentDto;
