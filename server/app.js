import express from "express";
import courseRoute from "./src/routes/CourseRoute.js";
import userRoute from "./src/routes/userRoute.js";
import ErrorMiddleware from "./src/middlewares/Error.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use('/api', courseRoute)
app.use('/api', userRoute)

app.use(ErrorMiddleware)

export default app;
