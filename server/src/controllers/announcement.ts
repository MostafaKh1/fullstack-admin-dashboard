import { Request, Response } from "express";
import Announcement from "../module/Announcements";

export const getAnnouncements = async (
  req: Request,
  res: Response
): Promise<void> => {
  const data = await Announcement.find();
  res.status(200).json(data);
};

export const addAnnouncement = async (
  req: Request,
  res: Response
): Promise<void | Response<string, Record<string, string>>> => {
  try {
    const { name, title, description, avatar } = req.body;

    if (!name || !title || !description || !avatar) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const data = await Announcement.create({
      name,
      title,
      description,
      avatar,
    });

    res.status(201).json(data);
  } catch (error) {
    console.error("Error creating announcement:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the announcement" });
  }
};

export const updateAnnouncement = async (
  req: Request,
  res: Response
): Promise<void | Response<string, Record<string, string>>> => {
  try {
    const { id } = req.params;
    const announcement = await Announcement.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    if (!id) {
      return res.status(401).send(`no found ${id}`);
    }
    if (!announcement) {
      return res.status(401).send(`no found ${announcement}`);
    }

    res.status(200).json(announcement);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
export const deleteAnnouncement = async (
  req: Request,
  res: Response
): Promise<void | Response<string, Record<string, string>>> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.send("id not Found");
    }
    const announcement = await Announcement.findById(id);
    if (!announcement) {
      return res.status(404).json({ error: "Announcement not found" });
    }
    await Announcement.deleteOne({ _id: id });

    res.status(200).json(announcement);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
