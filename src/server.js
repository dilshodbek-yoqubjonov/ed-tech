import express from "express";
import cookieParser from "cookie-parser";

// imported routes
import { courseRouter } from "./routes/course.router.js";
import { adminRouter } from "./routes/admin.router.js";
import { enrolmentRouter } from "./routes/enrollment.router.js";
import { userRouter } from "./routes/user.router.js";
import { videoRouter } from "./routes/video.router.js";
import { analyseRouter } from "./routes/analytics.router.js";
import { teacherRouter } from "./routes/teacher.router.js";
import { AiRouter } from "./routes/ai.router.js";
import { setupSwagger } from "./config/swagger.config.js";

// server
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser())

// main routers
app.use("/courses", courseRouter);
app.use(adminRouter)
app.use("/enrolment", enrolmentRouter)
app.use("/user", userRouter)
app.use("/video", videoRouter)
app.use("/", analyseRouter)
app.use("/teacher", teacherRouter)
app.use("/ai", AiRouter)

setupSwagger(app);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
