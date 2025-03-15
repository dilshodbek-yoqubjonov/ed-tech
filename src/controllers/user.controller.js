import prisma from "../config/prisma.config.js";

export const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await prisma.student.findMany({ include: { enrolled: { select: { courseId: true } } } });
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ success: false, message: "Error in Get all users info" });
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;

            const checkStudentExist = await prisma.student.findUnique({ where: { id: Number(id) } });
            if (!checkStudentExist) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            const user = await prisma.student.findUnique({ where: { id: Number(id) } });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ success: false, message: "Error in Get user by ID info" });
        }
    },

    createUser: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const checkEmailExist = await prisma.student.findUnique({ where: { email } });
            if (checkEmailExist) {
                return res.status(400).json({ success: false, message: "Email already exist" });
            }

            const user = await prisma.student.create({ data: { name, email, password } });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ success: false, message: "Error in create user info" });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;


            const checkExistingUser = await prisma.student.findUnique({ where: { id: Number(id) } });
            if (!checkExistingUser) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            const user = await prisma.student.update({ where: { id: Number(id) }, data: { name, email, password } });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ success: false, message: "Error in update user info" });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;

            const checkStudentExist = await prisma.student.findUnique({ where: { id: Number(id) } });
            if (!checkStudentExist) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            await prisma.student.delete({ where: { id: Number(id) } });
            res.status(200).json({ success: true, message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ success: false, message: "Error in delete user account" });
        }
    },
};  