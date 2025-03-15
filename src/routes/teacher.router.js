import { Router } from "express";
import { teacherController, TeacherToCourse } from "../controllers/teacher.controller.js";


export const teacherRouter = Router();


teacherRouter
    .post("/add-to-course", TeacherToCourse.addTeacher)
    .delete("/delete-from-course/:id", TeacherToCourse.deleteTecherFromCourse)

    // teacher controller route

    .get("/", teacherController.getTeachers)
    .get("/:id", teacherController.getTeacherByID)
    .post("/add", teacherController.addTeacher)
    .put("/:id", teacherController.updateTeacher)
    .delete("/:id", teacherController.deleteTeacher)