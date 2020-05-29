import { Course } from "../models/course.ts";
import CourseService from "../services/courseService.ts";

class CourseController {
  getCourses = ({ response }: { response: any }) => {
    response.body = CourseService.getAll();
  };

  addCourses = async ({
    request,
    response,
  }: {
    request: any;
    response: any;
  }) => {
    if (!request.hasBody) {
      response.status = 400;
      response.body = { message: "Invalid Course" };
      return;
    }

    const body = await request.body();
    const {
      value: { name, price, certification },
    } = body;

    if (!name || !price) {
      response.status = 400;
      response.body = {
        message: "Invalid course data. Name and Price are required",
      };
      return;
    }

    const course: Course = { name, price, certification };

    CourseService.add(course);

    response.body = { courseAdded: "Sucesso" };
    response.status = 200;
  };
}

export default new CourseController();
