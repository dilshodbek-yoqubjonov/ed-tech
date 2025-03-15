export const adminSwagger = {
    "/admin/login": {
        post: {
            summary: "Admin login",
            description: "Admin tizimga kirishi uchun login va parol yuboradi.",
            tags: ["Admin"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                login: { type: "string", example: "admin123" },
                                password: { type: "string", example: "admin12345" }
                            },
                            required: ["login", "password"]
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: "Muvaffaqiyatli login va tokenlar",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: { type: "integer", example: 1 },
                                    login: { type: "string", example: "admin123" }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: "Xatolik: Login yoki parol noto‘g‘ri",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", example: "Login yoki parol xato" }
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
                                    message: { type: "string", example: "Login admin error" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    "/admin/register": {
        post: {
            summary: "Admin ro‘yxatdan o‘tish",
            description: "Yangi adminni ro‘yxatdan o‘tkazish uchun login va parol yuboriladi.",
            tags: ["Admin"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                login: { type: "string", example: "admin123" },
                                password: { type: "string", example: "admin12345" }
                            },
                            required: ["login", "password"]
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: "Muvaffaqiyatli ro‘yxatdan o‘tish",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: { type: "integer", example: 1 },
                                    login: { type: "string", example: "admin123" }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: "Xatolik: Login band",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", example: "Login band" }
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
                                    message: { type: "string", example: "Register admin error" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    "/admin/refresh-token": {
        post: {
            summary: "Refresh token yangilash",
            description: "Adminning tokenini yangilaydi.",
            tags: ["Admin"],
            responses: {
                200: {
                    description: "Muvaffaqiyatli token yangilandi",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    success: { type: "boolean", example: true },
                                    message: { type: "string", example: "Refresh token updated successfully" }
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
                                    message: { type: "string", example: "Refresh token error" }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
