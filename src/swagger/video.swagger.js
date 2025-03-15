export const videoSwagger = {
    "/video/{id}": {
        get: {
            summary: "Get video by ID",
            tags: ["Videos"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: {
                    description: "Video details",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: { type: "integer" },
                                    videoName: { type: "string" },
                                    videoUrl: { type: "string" },
                                    courseId: { type: "integer" }
                                }
                            }
                        }
                    }
                },
                404: { description: "Video not found" }
            }
        },
        put: {
            summary: "Update video",
            tags: ["Videos"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                videoName: { type: "string" },
                                videoUrl: { type: "string" }
                            }
                        }
                    }
                }
            },
            responses: {
                200: { description: "Video updated successfully" },
                404: { description: "Video not found" }
            }
        },
        delete: {
            summary: "Delete video",
            tags: ["Videos"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: { description: "Video deleted successfully" },
                404: { description: "Video not found" }
            }
        }
    },
    "/video": {
        post: {
            summary: "Create new video",
            tags: ["Videos"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                videoName: { type: "string" },
                                videoUrl: { type: "string" },
                                courseId: { type: "integer" }
                            },
                            required: ["videoName", "videoUrl", "courseId"]
                        }
                    }
                }
            },
            responses: {
                201: { description: "Video created successfully" },
                404: { description: "Course not found" }
            }
        }
    }
};
