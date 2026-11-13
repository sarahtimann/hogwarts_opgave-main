import * as z from "zod";

const CreateStudentDto = z.object({
  name: z.string(),
  houseId: z.int(),
});

export default CreateStudentDto;
