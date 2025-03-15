import { Router } from "express";
import { videoController } from "../controllers/video.controller.js";

export const videoRouter = Router();

videoRouter
    .get("/:id", videoController.getByID)
    .post("/", videoController.createVideo)
    .put("/:id", videoController.updateVideo)
    .delete("/:id", videoController.deleteVideo)