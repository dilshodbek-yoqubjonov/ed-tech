import { Router } from "express";
import getTopCourses from "../controllers/analytics.controller.js";

export const analyseRouter = Router();

analyseRouter
    .get("/anlyse/:count", getTopCourses)