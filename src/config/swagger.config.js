import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { courseSwagger } from "../swagger/courses.swagger.js";
import { videoSwagger } from "../swagger/video.swagger.js";
import { userSwagger } from "../swagger/user.swagger.js";
import { teacherSwagger } from "../swagger/teacher.swagger.js";
import { enrolmentSwagger } from "../swagger/enrolment.swagger.js";
import { analyseSwagger } from "../swagger/analytic.swagger.js";
import { aiSwagger } from "../swagger/ai.swagger.js";
import { adminSwagger } from "../swagger/admin.swagger.js";





const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "EdTech Platform API",
        version: "1.0.0",
        description: "EdTech kurs boshqaruv tizimi uchun API hujjatlari",
    },
    servers: [
        {
            url: "http://localhost:5000",
            description: "Local server",
        },
    ],

    paths: { ...courseSwagger, ...videoSwagger, ...userSwagger, ...teacherSwagger, ...enrolmentSwagger, ...adminSwagger, ...analyseSwagger, ...aiSwagger },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
    security: [{ bearerAuth: [] }],
};

const options = {
    swaggerDefinition,
    apis: [],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("Swagger Docs: http://localhost:5000/api-docs");
};
