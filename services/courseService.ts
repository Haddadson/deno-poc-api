import { Course } from "../models/course.ts";

//DataBase
let courses: Array<Course> = [
  {
    name: "C++",
    price: 2.4,
    certification: true,
  },
  {
    name: "iOS",
    price: 3.5,
    certification: false,
  },
  {
    name: "Deno",
    price: 1.5,
    certification: true,
  },
];

class CourseService {
  getAll = () => {
    return courses;
  };

  add = (course: Course) => {
    courses.push(course);
  };
}

export default new CourseService();
