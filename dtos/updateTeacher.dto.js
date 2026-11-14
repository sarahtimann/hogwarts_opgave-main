// dto = Data Transfer Object

import * as z from "zod";

const UpdateTeacherDto = z.object({
  name: z.string(),
  houseId: z.int(),
  employmentStart: z.coerce.date(),
  currentlyActive: z.boolean(),
  deceased: z.boolean(),
});

export default UpdateTeacherDto;
