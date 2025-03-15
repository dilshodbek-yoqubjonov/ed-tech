import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import checkToken from "../middlewares/check-token.js";
import { rateCourse } from "../controllers/rating.controller.js";

export const userRouter = Router();


userRouter
    .get("/", checkToken, userController.getAllUsers)
    .get("/:id", userController.getUserById)
    .post("/", userController.createUser)
    .put("/:id", userController.updateUser)
    .delete("/:id", userController.deleteUser)



    .post("/rate", checkToken, rateCourse.rateCourseByUsers);
