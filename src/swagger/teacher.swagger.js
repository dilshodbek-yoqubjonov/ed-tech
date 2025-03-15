export const teacherSwagger = {
    "/teacher": {
        get: {
            summary: "Get all teachers",
            tags: ["Teachers"],
            responses: {
                200: {
                    description: "List of teachers",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "integer" },
                                        fullName: { type: "string" }
                                    }
                                }
                            }
                        }
                    }
                },
                500: { description: "Server error" }
            }
        }
    },
    "/teacher/add": {
        post: {
            summary: "Add a new teacher",
            tags: ["Teachers"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                fullName: { type: "string" }
                            },
                            required: ["fullName"]
                        }
                    }
                }
            },
            responses: {
                201: { description: "Teacher created" },
                500: { description: "Error creating teacher" }
            }
        }
    },
    "/teacher/{id}": {
        get: {
            summary: "Get teacher by ID",
            tags: ["Teachers"],
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
                    description: "Teacher details",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: { type: "integer" },
                                    fullName: { type: "string" }
                                }
                            }
                        }
                    }
                },
                404: { description: "Teacher not found" }
            }
        },
        put: {
            summary: "Update teacher by ID",
            tags: ["Teachers"],
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
                                fullName: { type: "string" }
                            },
                            required: ["fullName"]
                        }
                    }
                }
            },
            responses: {
                200: { description: "Teacher updated successfully" },
                404: { description: "Teacher not found" }
            }
        },
        delete: {
            summary: "Delete teacher by ID",
            tags: ["Teachers"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: { description: "Teacher deleted successfully" },
                404: { description: "Teacher not found" }
            }
        }
    },
    "/teacher/add-to-course": {
        post: {
            summary: "Add teacher to a course",
            tags: ["Teachers"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                teacherId: { type: "integer" },
                                courseId: { type: "integer" }
                            },
                            required: ["teacherId", "courseId"]
                        }
                    }
                }
            },
            responses: {
                200: { description: "Teacher added to course" },
                404: { description: "Teacher or Course not found" },
                500: { description: "Server error" }
            }
        }
    },
    "/teacher/delete-from-course/{id}": {
        delete: {
            summary: "Remove teacher from a course",
            tags: ["Teachers"],
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
                                teacherId: { type: "integer" },
                                courseId: { type: "integer" }
                            },
                            required: ["teacherId", "courseId"]
                        }
                    }
                }
            },
            responses: {
                200: { description: "Teacher removed from course" },
                404: { description: "Teacher or Course not found" },
                500: { description: "Server error" }
            }
        }
    }
};
