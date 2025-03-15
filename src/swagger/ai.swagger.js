export const aiSwagger = {
    "/ai/chat": {
        post: {
            summary: "Get AI chat support",
            description: "Send a message to the AI and receive a response. Session history is stored using Redis.",
            tags: ["AI"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                message: { type: "string", example: "Salom, menga yordam bera olasizmi?" },
                                sessionId: { type: "string", example: "123e4567-e89b-12d3-a456-426614174000", nullable: true }
                            },
                            required: ["message"]
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: "AI javobi va chat tarixi",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    success: { type: "boolean", example: true },
                                    sessionId: { type: "string", example: "123e4567-e89b-12d3-a456-426614174000" },
                                    response: { type: "string", example: "Salom! Sizga qanday yordam bera olaman?" },
                                    chatHistory: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                role: { type: "string", example: "user" },
                                                content: { type: "string", example: "Salom, menga yordam bera olasizmi?" }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: "Xatolik: Xabar kiritilmagan",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    success: { type: "boolean", example: false },
                                    error: { type: "string", example: "Xabar jo'natilmadi!" }
                                }
                            }
                        }
                    }
                },
                500: {
                    description: "Server xatosi",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    success: { type: "boolean", example: false },
                                    error: { type: "string", example: "Server xatosi" }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
