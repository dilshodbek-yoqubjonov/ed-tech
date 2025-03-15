import { Router } from "express";
import { getAiSupport } from "../controllers/ai.support.controller.js";

export const AiRouter = Router();

AiRouter.post('/chat', getAiSupport);


