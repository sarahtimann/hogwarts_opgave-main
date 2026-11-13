import * as z from "zod";

const CreateTeacherDto = z.object({
  name: z.string(),
  houseId: z.int(),
});

export default CreateTeacherDto;
