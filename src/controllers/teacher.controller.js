import prisma from "../config/prisma.config.js";

export const TeacherToCourse = {
    addTeacher: async (req, res) => {
        try {
            const { courseId, teacherId } = req.body;

            // Kurs va Teacher mavjudligini tekshiramiz
            const course = await prisma.course.findUnique({ where: { id: courseId } });
            const teacher = await prisma.teachers.findUnique({ where: { id: teacherId } });

            if (!course || !teacher) {
                return res.status(404).json({ success: false, message: "Course yoki Teacher topilmadi" });
            }

            // Teacher-ni kursga bog‘laymiz
            await prisma.courseTeachers.create({
                data: { courseId, teacherId }
            });

            res.json({ success: true, message: "Teacher kursga qo‘shildi" });

        } catch (error) {
            res.status(500).json({ success: false, message: "Server xatosi" });
        }
    },


    deleteTecherFromCourse: async (req, res) => {
        try {
            const { courseId, teacherId } = req.body;

            // Kurs va Teacher mavjudligini tekshiramiz 
            const course = await prisma.course.findUnique({ where: { id: courseId } });
            const teacher = await prisma.teachers.findUnique({ where: { id: teacherId } });

            if (!course || !teacher) {
                return res.status(404).json({ success: false, message: "Course yoki Teacher topilmadi" });
            }

            // Teacher-ni kursdan olib tashlaymiz    
            await prisma.courseTeachers.delete({
                where: { courseId_teacherId: { courseId, teacherId } }
            });

            res.json({ success: true, message: "Teacher kursdan olib tashlandi" });

        } catch (error) {
            res.status(500).json({ success: false, message: "Server xatosi" });
        }
    }

};


export const teacherController = {
    addTeacher: async (req, res) => {
        try {
            const { fullName } = req.body;

            const teacher = await prisma.teachers.create({ data: { fullName } });


            res.status(201).json(teacher);
        } catch (error) {
            res.status(500).json({ success: false, message: "Error in create teacher info" });
        }
    },

    deleteTeacher: async (req, res) => {
        try {
            const { id } = req.params;

            await prisma.teachers.delete({ where: { id: Number(id) } });
            res.status(200).json({ success: true, message: "Teacher deleted successfully" });
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Delete teacher error"
            })
        }
    },
    getTeachers: async (req, res) => {
        try {
            const teachers = await prisma.teachers.findMany();
            res.status(200).json(teachers);
        } catch (error) {
            res.status(500).json({ success: false, message: "Error in Get teacher info" });
        }
    },
    getTeacherByID: async (req, res) => {
        try {
            const { id } = req.params;
            const teacher = await prisma.teachers.findUnique({ where: { id: Number(id) } });
            res.status(200).json(teacher);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Get teacher by ID error"
            })
        }
    },
    updateTeacher: async (req, res) => {
        try {
            const { id } = req.params;
            const { fullName } = req.body;
            const teacher = await prisma.teachers.update({ where: { id: Number(id) }, data: { fullName } });
            res.status(200).json(teacher);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Update teacher error"
            })

        };
    }
}
