import { Schema, model } from "mongoose";

interface IUserResult {
  userId: string;
  results: Array<{
    questionId: string;
    score: number;
  }>;
}

const UserResultSchema = new Schema<IUserResult>({
  userId: { type: String, required: true },
  results: [
    {
      questionId: { type: String, required: true },
      score: { type: Number, required: true },
    },
  ],
});

const UserResult = model<IUserResult>("UserResult", UserResultSchema);

export default UserResult;
