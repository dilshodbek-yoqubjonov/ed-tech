
// auth admin login and register

import prisma from "../config/prismaConfig";
import { sign } from "../tools/jwt";

export const authAdmin = {
    loginAdmin: async (req, res) => {
        try {
            const { login, password } = req.body;
            const admin = await prisma.admin.findUnique({ where: { login } });
            const payload = { id: admin.id, login: admin.login }
            if (admin.password === password) {

                // create access token and refresh token
                const token = sign(payload);
                cookie = res.cookie("token", token, { httpOnly: true });
                cookie = res.cookie("refreshToken", token, { httpOnly: true });

                res.status(200).json(admin);

            } else {
                res.status(400).json({ message: "Parol xato" });
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
            const admin = await prisma.admin.create({ data: { login, password } });

            // create access token and refresh token
            const token = sign({ id: admin.id, login: admin.login });
            cookie = res.cookie("token", token, { httpOnly: true });
            cookie = res.cookie("refreshToken", token, { httpOnly: true });

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
            cookie = res.cookie("token", token, { httpOnly: true });
            cookie = res.cookie("refreshToken", token, { httpOnly: true });
            res.status(200).json({ success: true, message: "Refresh token updated successfully " });
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Refresh token error"
            })
        }
    }
}
