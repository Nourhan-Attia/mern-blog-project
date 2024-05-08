import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
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

const app = express();
