import { Schema, model } from "mongoose";

interface IQuizSchema {
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuizSchema = new Schema<IQuizSchema>({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
});

const Quiz = model<IQuizSchema>("Quiz", QuizSchema);

export default Quiz;
