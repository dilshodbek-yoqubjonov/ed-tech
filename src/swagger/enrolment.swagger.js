export const enrolmentSwagger = {
    "/enrolment": {
        post: {
            summary: "Enroll a student in a course",
            description: "Create a new student enrolment for a specific course.",
            tags: ["Enrolment"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                studentId: { type: "integer", example: 1 },
                                courseId: { type: "integer", example: 2 }
                            },
                            required: ["studentId", "courseId"]
                        }
                    }
                }
            },
            responses: {
                201: { description: "Student successfully enrolled" },
                400: { description: "Invalid input data" },
                404: { description: "Course or student not found" },
                500: { description: "Server error" }
            }
        }
    },
    "/enrolment/{id}": {
        get: {
            summary: "Get students enrolled in a course",
            description: "Retrieve a list of students enrolled in a specific course.",
            tags: ["Enrolment"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: { description: "List of enrolled students" },
                404: { description: "Course not found" },
                500: { description: "Server error" }
            }
        },
        put: {
            summary: "Update an enrolment",
            description: "Modify the student-course enrolment details.",
            tags: ["Enrolment"],
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
                                studentId: { type: "integer", example: 1 },
                                courseId: { type: "integer", example: 2 }
                            },
                            required: ["studentId", "courseId"]
                        }
                    }
                }
            },
            responses: {
                200: { description: "Enrolment successfully updated" },
                400: { description: "Invalid input data" },
                404: { description: "Enrolment not found" },
                500: { description: "Server error" }
            }
        },
        delete: {
            summary: "Delete an enrolment",
            description: "Remove a student's enrolment from a course.",
            tags: ["Enrolment"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" }
                }
            ],
            responses: {
                200: { description: "Enrolment successfully deleted" },
                404: { description: "Enrolment not found" },
                500: { description: "Server error" }
            }
        }
    }
};
