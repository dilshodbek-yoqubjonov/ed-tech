import prisma from "../config/prisma.config.js";

export const studentsEnrolment = {
    getStudentsEnrolment: async (req, res) => {
        try {
            const { id } = req.params;

            const studentsEnrolment = await prisma.enrollment.findMany({
                where: { courseId: Number(id) },
                include: {
                    student: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
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

            const checkStudent = await prisma.student.findUnique({ where: { id: Number(studentId) } });
            const checkCourse = await prisma.course.findUnique({ where: { id: Number(courseId) } });

            if (!checkStudent || !checkCourse) {
                return res.status(404).json({ success: false, message: "Course id or Studen id not found" });
            }

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

            const checkIDs = await prisma.enrollment.findUnique({ where: { id: Number(req.params.id) } });
            const checkStudent = await prisma.student.findUnique({ where: { id: Number(studentId) } });
            const checkCourse = await prisma.course.findUnique({ where: { id: Number(courseId) } });

            if (!checkIDs || !checkStudent || !checkCourse) {
                return res.status(404).json({ success: false, message: "Course id or Studen id not found" });
            }

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