import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./utils/config.js";
import studentRouter from "./routes/studentRouter.js";

const app = express();

const connectToDB = async (url) => {
  await mongoose.connect(url);
  console.log("Successfully connected");
};
connectToDB(config.MONGODB);
app.use(express.json());
app.use(cors());
app.use(express.static("dist"));
app.use("/api/students", studentRouter);

export default app;
