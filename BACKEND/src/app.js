import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
// to access cookies
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// to store static files
app.use(express.static("public"));

import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1users/
export { app };
