export const analyseSwagger = {
    "/anlyse/{count}": {
        get: {
            summary: "Get top-rated courses",
            description: "Retrieve the top-rated courses based on average rating and rating count.",
            tags: ["Analysis"],
            parameters: [
                {
                    name: "count",
                    in: "path",
                    required: false,
                    description: "Number of top courses to fetch (default is 3)",
                    schema: { type: "integer", example: 5 }
                }
            ],
            responses: {
                200: {
                    description: "List of top-rated courses",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "integer", example: 1 },
                                        title: { type: "string", example: "Fullstack Web Development" },
                                        _count: {
                                            type: "object",
                                            properties: {
                                                students: { type: "integer", example: 100 },
                                                videos: { type: "integer", example: 20 }
                                            }
                                        },
                                        RatingCount: { type: "integer", example: 50 },
                                        avgRating: { type: "number", format: "float", example: 4.8 }
                                    }
                                }
                            }
                        }
                    }
                },
                500: { description: "Server error" }
            }
        }
    }
};
