import prisma from "../config/prisma.config.js";


const getTopCourses = async (req, res) => {
    try {
        const count = req.params.count || 3;
        const courses = await prisma.course.findMany({
            select: {
                id: true,
                title: true,
                _count: {
                    select: { students: true, videos: true }
                },
                RatingCount: true,
                avgRating: true,
            }
        });


        const sortedCourses = [...courses].sort((a, b) => {

            if (b.avgRating !== a.avgRating) {
                return b.avgRating - a.avgRating;
            }

            return b.RatingCount - a.RatingCount;
        });

        // count'ta kursni ko'rsatish
        const topCourses = sortedCourses.slice(0, count);

        res.json(topCourses);

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch top courses" });
    }
}

export default getTopCourses