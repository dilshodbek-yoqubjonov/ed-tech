import prisma from "../config/prisma.config.js";

export const rateCourse = {
    rateCourseByUsers: async (req, res) => {
        try {
            const { courseId, score } = req.body;
            const userId = Number(req.user.id) || req.user.id;

            if (!courseId || !score) {
                return res.status(400).json({ message: "courseId yoki score mavjud emas" });
            }

            if (score < 1 || score > 5) {
                return res.status(400).json({ message: "Rating faqat 1 dan 5 baholang" });
            }

            // faqat sotib olingan kurslarga rate qilsin
            const isEnrolled = await prisma.enrollment.findFirst({
                where: { courseId, studentId: userId }
            });

            if (!isEnrolled) {
                return res.status(403).json({ message: "Bu kursga rating berish uchun kursni so'tib oling" });
            }

            // eski rate tekshirish
            const existingRating = await prisma.rating.findFirst({
                where: { courseId, userId }
            });

            if (existingRating) {
                // agar eski rate bo'lsa yangilasin
                await prisma.rating.update({
                    where: { id: existingRating.id },
                    data: { score }
                });
            } else {
                // eski bo'lmasa yangisini qo'shadi
                await prisma.rating.create({
                    data: { score, userId, courseId }
                });
            }

            // avarage ratingni hisoblash
            const avg = await prisma.rating.aggregate({
                where: { courseId },
                _avg: { score: true },
                _count: { score: true }
            });

            // kursdagi avg ratingni yanglash yangi userning ratingini qo'shgan holda
            await prisma.course.update({
                where: { id: courseId },
                data: {
                    avgRating: avg._avg.score || 5,
                    RatingCount: avg._count.score
                }
            });

            res.json({ message: "Reyting muvaffaqiyatli yangilandi", avgRating: avg._avg.score });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
