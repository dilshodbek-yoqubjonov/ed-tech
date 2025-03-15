import { Router } from "express";
import { studentsEnrolment } from "../controllers/enrollment.controller.js";

export const enrolmentRouter = Router();

enrolmentRouter
    .post("/", studentsEnrolment.createStudentEnrolment)
    .get("/:id", studentsEnrolment.getStudentsEnrolment)
    .delete("/:id", studentsEnrolment.deleteStudentEnrolment)
    .put("/:id", studentsEnrolment.updateStudentEnrolment)
