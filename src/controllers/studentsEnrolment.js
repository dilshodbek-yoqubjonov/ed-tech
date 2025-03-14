import prisma from "../config/prismaConfig";

export const studentsEnrolment = {
    getStudentsEnrolment: async (req, res) => {
        try {
            const { id } = req.params;
            const studentsEnrolment = await prisma.enrollment.findMany({
                where: { courseId: Number(id) },
                include: {
                    student: true
                }
            });
            res.status(200).json(studentsEnrolment);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Get students enrolment error"
            })
        }
    },
    createStudentEnrolment: async (req, res) => {
        try {
            const { studentId, courseId } = req.body;
            const studentEnrolment = await prisma.enrollment.create({ data: { studentId, courseId } });
            res.status(201).json(studentEnrolment);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Create student enrolment error"
            })
        }
    },

    updateStudentEnrolment: async (req, res) => {
        try {
            const { studentId, courseId } = req.body;
            const studentEnrolment = await prisma.enrollment.update({
                where: { id: Number(req.params.id) },
                data: { studentId, courseId }
            });
            res.status(200).json(studentEnrolment);

        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Update student enrolment error"
            })
        }
    },

    deleteStudentEnrolment: async (req, res) => {
        try {
            const id = Number(req.params.id);

            await prisma.enrollment.delete({ where: { id } });
            res.status(200).json({
                success: true,
                message: "O'chirildi"
            });
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Delete student enrolment error"
            })
        }
    }
}