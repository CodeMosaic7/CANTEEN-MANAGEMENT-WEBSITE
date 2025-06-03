import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
const app = express();

// Middleware
app.use(
  cors({
    // origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    origin: "http://localhost:5173",

    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie"],
  })
);
app.use(express.json({ limit: "16kb" }));
// to access cookies
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// to store static files
app.use(express.static("public"));

import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

// http://localhost:8000/api/v1/users/
export { app };
