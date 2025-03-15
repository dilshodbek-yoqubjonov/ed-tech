
// auth admin login and register

import prisma from "../config/prisma.config.js";
import { sign } from "../tools/jwt.js";
import cookie from "cookie";

export const authAdmin = {
    loginAdmin: async (req, res) => {
        try {
            const { login, password } = req.body;

            if (!login || !password) return res.status(400).json({ message: "Login yoki parol kiritilmagan" });

            const admin = await prisma.manager.findUnique({ where: { login } });
     

            if (!admin) {
                return res.status(400).json({ message: "Login yoki parol xato" });
            }

            if (admin.password === password) {

                const payload = { id: admin.id, login: admin.login }
                // create access token and refresh token
                const token = sign(payload);

                //clear cookies before set  
                res.clearCookie("accessToken", { httpOnly: false });
                res.clearCookie("refreshToken", { httpOnly: false });


                // set cookies
                res.cookie("accessToken", token, { httpOnly: false }); // httpOnly: false for development
                res.cookie("refreshToken", token, { httpOnly: false });

                res.status(200).json(admin);

            } else {
                res.status(400).json({ message: "Parol yoki login xato" });
            }
        } catch (error) {

            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Login admin error"
            })
        }
    },

    registerAdmin: async (req, res) => {
        try {
            const { login, password } = req.body;

            if (!login || !password) return res.status(400).json({ message: "Login yoki parol kiritilmagan" });

            const checkLogin = await prisma.manager.findUnique({ where: { login } });

            if (checkLogin) {
                return res.status(400).json({ message: "Login band" });
            }
            const admin = await prisma.manager.create({ data: { login, password } });

            // create access token and refresh token
            const token = sign({ id: admin.id, login: admin.login });
            res.clearCookie("accessToken", { httpOnly: false });
            res.clearCookie("refreshToken", { httpOnly: false });


            res.cookie("accessToken", token, { httpOnly: false });
            res.cookie("refreshToken", token, { httpOnly: false });

            res.status(201).json(admin);
        } catch (error) {

            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Register admin error"
            })
        }
    },

    refreshToken: async (req, res) => {
        try {
            const refreshToken = req.cookies.refreshToken;
            const payload = verify(refreshToken);

            const token = sign(payload);

            //set cookies
            cookie = res.cookie("token", token, { httpOnly: false });
            cookie = res.cookie("refreshToken", token, { httpOnly: false });

            res.status(200).json({ success: true, message: "Refresh token updated successfully " });
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Refresh token error"
            })
        }
    }
}
