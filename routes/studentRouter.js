import express from "express";
import studentController from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/", studentController.getStudents);

export default studentRouter;
