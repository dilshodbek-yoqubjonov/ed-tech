import prisma from "../config/prisma.config.js";

export const videoController = {
    getByID: async (req, res) => {
        try {
            const { id } = req.params;
            const video = await prisma.courseVideos.findFirst({ where: { id: Number(id) } });

            if (!video) {
                return res.status(404).json({ success: false, message: "Video not found" });
            }

            res.status(200).json(video);
        } catch (error) {
            res.status(500).json({ success: false, message: "Error in Get video by ID info" });
        }
    },

    createVideo: async (req, res) => {
        try {
            const { videoName, videoUrl, courseId } = req.body;

            const checkCourseId = await prisma.course.findUnique({ where: { id: Number(courseId) } });
            if (!checkCourseId) {
                return res.status(404).json({ success: false, message: "Course id not found" });
            }

            const video = await prisma.courseVideos.create({ data: { videoName, videoUrl, courseId } });
            res.status(201).json(video);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Create video error"
            })
        }
    },

    updateVideo: async (req, res) => {
        try {
            const { id } = req.params;
            const { videoName, videoUrl } = req.body;

            const checkVideo = await prisma.courseVideos.findUnique({ where: { id: Number(id) } });
            if (!checkVideo) {
                return res.status(404).json({ success: false, message: "Video not found" });
            }

            const video = await prisma.courseVideos.update({ where: { id: Number(id) }, data: { videoName, videoUrl } });
            res.status(200).json(video);
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Update video error"
            })
        }
    },

    deleteVideo: async (req, res) => {
        try {
            const { id } = req.params;

            const checkVideo = await prisma.courseVideos.findUnique({ where: { id: Number(id) } });
            if (!checkVideo) {
                return res.status(404).json({ success: false, message: "Video not found" });
            }

            await prisma.courseVideos.delete({ where: { id: Number(id) } });
            res.status(200).json({ success: true, message: "Video deleted successfully" });
        } catch (error) {
            res.status(500 || error.statusCode).json({
                success: false,
                message: error.message || "Delete video error"
            })
        }
    }
};