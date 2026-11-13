// dto = Data Transfer Object

import * as z from "zod";

const UpdateTeacherDto = z.object({
  id: z.int().min(0),
  name: z.string(),
  houseId: z.int(),
});

export default UpdateTeacherDto;
