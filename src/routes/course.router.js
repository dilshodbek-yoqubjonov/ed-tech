import { Router } from "express";
import { courseController } from "../controllers/course.controller.js";



export const courseRouter = Router();

courseRouter.get("/", courseController.getAllCourses)
    .get("/:id", courseController.getCourseById)
    .post("/", courseController.createCourse)
    .put("/:id", courseController.updateCourse)
    .delete("/:id", courseController.deleteCourse);
