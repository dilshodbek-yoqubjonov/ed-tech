import { Router } from "express";
import { courseController } from "../controllers/coursesController.js";



export const courseRouter = Router();

courseRouter.get("/", courseController.getAllCourses)
    .get("/:id", courseController.getCourseById)
    .post("/", courseController.createCourse)
    .put("/:id", courseController.updateCourse)
    .delete("/:id", courseController.deleteCourse);
