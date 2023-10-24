import express, { Request, Response } from "express";
import Quiz from "../module/Quiz";

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { question, options, correctAnswer } = req.body;
    if (!question || !options || !correctAnswer) {
      return res.status(400).json({ msg: "No data" });
    }

    const createNewQuestion = await Quiz.create({
      question,
      options,
      correctAnswer,
    });
    res.status(201).json(createNewQuestion);
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};

export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const allQuestions = await Quiz.find();
    res.status(200).json(allQuestions);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const removeQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ msg: "id does not exists" });
    }
    const remove = await Quiz.findByIdAndDelete(id);
    res.status(201).json(remove);
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ msg: "id does not exists" });
    }
    const updateNewQuestion = await Quiz.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );

    res.status(201).json(updateNewQuestion);
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};
