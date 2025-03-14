import express from "express";
import { courseRouter } from "./routes/coursesRouter.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "50mb" }));


app.use("/courses", courseRouter);


console.clear()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
