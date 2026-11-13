import * as z from "zod";

const UpdateStudentDto = z.object({
  id: z.int().min(0),
  name: z.string(),
  houseId: z.int(),
});

export default UpdateStudentDto;
