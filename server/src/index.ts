import express, { Request, Response } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
// Routes
import AnnouncementsRoutes from "./routes/announcement";
import QuizRoutes from "./routes/quiz";
import UserResult from "./module/UserResult";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
dotenv.config();

const assetsPath = path.join(__dirname, "assets");

app.use("/assets", express.static(assetsPath));

app.get("/", (req: Request, res: Response) => {
  res.send("Test");
});

app.post("/user-results/:userId", async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { results } = req.body;

    if (!userId || !results || !Array.isArray(results)) {
      return res.status(400).json({ msg: "Invalid data" });
    }

    const totalScore = results.reduce((acc, result) => acc + result.score, 0);
    const passThreshold = 70;
    const isPass = totalScore >= passThreshold;

    await UserResult.create({ userId, results });

    res.status(201).json({
      totalScore,
      isPass,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// Routes
app.use("/announcements", AnnouncementsRoutes);
app.use("/quiz", QuizRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server on port ${PORT}`);
      // User.insertMany(users);
    });
  })
  .catch((err) => console.log(err));
