import { Router } from "https://deno.land/x/oak/mod.ts";
import CourseController from "./controllers/courseController.ts";

const router = new Router();
router
  .get("/courses", CourseController.getCourses)
  .post("/courses/add", CourseController.addCourses);

export default router;
