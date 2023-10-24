import express from "express";
import {
  createQuestion,
  getAllQuestions,
  removeQuestion,
  updateQuestion
} from "../controllers/quiz";

const route = express.Router();

route.post("/", createQuestion);
route.get("/", getAllQuestions);
route.patch("/:id", updateQuestion)
route.delete("/:id", removeQuestion);

export default route;
