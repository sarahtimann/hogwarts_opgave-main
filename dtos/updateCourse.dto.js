import * as z from "zod";

const UpdateCourseDto = z
  .object({
    name: z.string(),
    teacherId: z.int(),
    type: z.enum(["core", "elective", "extra-curricular"]),
    level: z.enum(["OWL", "NEWT"]),
    schoolYear: z.int().min(1).max(7),
  })
  .refine((course) => (course.schoolYear <= 5 && course.level === "OWL") || (course.schoolYear >= 6 && course.level === "NEWT"), {
    message: "OWL gælder for år 1-5, og NEWT gælder for år 6-7.",
    path: ["level"],
  });

export default UpdateCourseDto;
