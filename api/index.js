import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
mongoose
  .connect(process.env.MONGO, console.log("connected to mongodb"))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server listening on port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
