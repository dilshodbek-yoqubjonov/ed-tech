import prisma from "../config/prisma.config.js";



export const courseController = {
    getAllCourses: async (req, res) => {
        try {
            const courses = await prisma.course.findMany({
                select: {
                    id: true,
                    title: true,
                    _count: {
                        select: { students: true, videos: true }
                    },
                    teachers: { select: { teacher: { select: { fullName: true } } } },
                    RatingCount: true,
                    avgRating: true,

                }
            });

            res.json(courses);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Get all courses error"
            })
        }
    },

    getCourseById: async (req, res) => {
        try {
            const id = Number(req.params.id); // ID ni songa o'grib olish
            const course = await prisma.course.findUnique({
                select: {
                    id: true,
                    title: true,
                    _count: {
                        select: { students: true, videos: true }
                    },
                    RatingCount: true,
                    avgRating: true,

                }, where: { id }
            });
            res.status(200).json(course);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Get by id courses error"
            })
        }
    },

    createCourse: async (req, res) => {
        try {
            const { title, description, price } = req.body;

            const course = await prisma.course.createManyAndReturn({ data: { title, description, price } });
            res.status(201).json(course);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || " Create course error"
            })
        }
    },

    updateCourse: async (req, res) => {
        try {
            const { title, description, price } = req.body;
            const id = Number(req.params.id);

            const course = await prisma.course.update({
                where: { id },
                data: { title, description, price },
            });

            res.status(200).json(course);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Update course error"
            })
        }
    },

    deleteCourse: async (req, res) => {
        try {
            const id = Number(req.params.id);

            await prisma.course.delete({ where: { id } });
            res.status(200).json({
                success: true,
                message: "Kurs muvaffaqiyatli o'chirildi"
            });
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Delete course error"
            })
        }
    }
};


