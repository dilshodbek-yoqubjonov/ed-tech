import { Router } from "express";
import { authAdmin } from "../controllers/auth.controller.js";

export const adminRouter = Router();

adminRouter
    .post("/login", authAdmin.loginAdmin)
    .post("/register", authAdmin.registerAdmin)
    .post("/refresh-token", authAdmin.refreshToken);