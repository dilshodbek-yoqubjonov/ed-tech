export const courseSwagger = {
    "/courses": {
        get: {
            summary: "Get all courses",
            description: "Retrieve a list of all courses.",
            tags: ["Courses"],
            responses: {
                200: {
                    description: "Successfully retrieved courses",
                    content: {
                        "application/json": {
                            example: [
                                {
                                    id: 1,
                                    title: "Node.js Course",
                                    _count: { students: 50, videos: 10 },
                                    teachers: [{ teacher: { fullName: "John Doe" } }],
                                    RatingCount: 100,
                                    avgRating: 4.5
                                }
                            ]
                        }
                    }
                },
                500: { description: "Internal server error" }
            }
        },
        post: {
            summary: "Create a new course",
            description: "Add a new course to the system.",
            tags: ["Courses"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                title: { type: "string", example: "JavaScript Basics" },
                                description: { type: "string", example: "A course for beginners" },
                                price: { type: "number", example: 99.99 }
                            }
                        }
                    }
                }
            },
            responses: {
                201: { description: "Course created successfully" },
                400: { description: "Bad request" },
                500: { description: "Internal server error" }
            }
        }
    },
    "/courses/{id}": {
        get: {
            summary: "Get course by ID",
            description: "Retrieve a course using its ID.",
            tags: ["Courses"],
            parameters: [
                { name: "id", in: "path", required: true, schema: { type: "integer" } }
            ],
            responses: {
                200: { description: "Successfully retrieved course" },
                404: { description: "Course not found" },
                500: { description: "Internal server error" }
            }
        },
        put: {
            summary: "Update a course",
            description: "Modify an existing course by ID.",
            tags: ["Courses"],
            parameters: [
                { name: "id", in: "path", required: true, schema: { type: "integer" } }
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                title: { type: "string", example: "Updated Title" },
                                description: { type: "string", example: "Updated description" },
                                price: { type: "number", example: 79.99 }
                            }
                        }
                    }
                }
            },
            responses: {
                200: { description: "Successfully updated course" },
                400: { description: "Invalid input" },
                404: { description: "Course not found" },
                500: { description: "Internal server error" }
            }
        },
        delete: {
            summary: "Delete a course",
            description: "Remove a course by ID.",
            tags: ["Courses"],
            parameters: [
                { name: "id", in: "path", required: true, schema: { type: "integer" } }
            ],
            responses: {
                200: { description: "Successfully deleted course" },
                404: { description: "Course not found" },
                500: { description: "Internal server error" }
            }
        }
    }
};
