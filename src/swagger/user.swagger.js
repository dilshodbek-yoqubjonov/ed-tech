export const userSwagger = {
    "/user": {
        get: {
            summary: "Get all users",
            tags: ["Users"],
            responses: {
                200: {
                    description: "List of users",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "integer" },
                                        name: { type: "string" },
                                        email: { type: "string" }
                                    }
                                }
                            }
                        }
                    }
                },
                500: { description: "Server error" }
            }
        },
        post: {
            summary: "Create a new user",
            tags: ["Users"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                email: { type: "string" },
                                password: { type: "string" }
                            },
                            required: ["name", "email", "password"]
                        }
                    }
                }
            },
            responses: {
                201: { description: "User created successfully" },
                400: { description: "Email already exists" },
                500: { description: "Server error" }
            }
        }
    },

    "/user/{id}": {
        get: {
            summary: "Get user by ID",
            tags: ["Users"],
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
                    description: "User details",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: { type: "integer" },
                                    name: { type: "string" },
                                    email: { type: "string" }
                                }
                            }
                        }
                    }
                },
                404: { description: "User not found" },
                500: { description: "Server error" }
            }
        },
        put: {
            summary: "Update user",
            tags: ["Users"],
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
                                name: { type: "string" },
                                email: { type: "string" },
                                password: { type: "string" }
                            }
                        }
                    }
                }
            },
            responses: {
                200: { description: "User updated successfully" },
                404: { description: "User not found" },
                500: { description: "Server error" }
            }
        },
        delete: {
            summary: "Delete user",
            tags: ["Users"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: { description: "User deleted successfully" },
                404: { description: "User not found" },
                500: { description: "Server error" }
            }
        }
    },

    "/user/rate": {
        post: {
            summary: "Rate a course",
            tags: ["Users"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                courseId: { type: "integer" },
                                score: { type: "integer", minimum: 1, maximum: 5 }
                            },
                            required: ["courseId", "score"]
                        }
                    }
                }
            },
            responses: {
                200: { description: "Rating updated successfully" },
                400: { description: "Invalid rating value or missing parameters" },
                403: { description: "User has not purchased the course" },
                500: { description: "Server error" }
            }
        }
    }
};
