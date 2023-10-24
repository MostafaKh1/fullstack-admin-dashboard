import { Schema, model } from "mongoose";

interface IAnnouncementsSchema {
  name: string;
  title: string;
  avatar?: string;
  description: string;
}

const announcementsSchema = new Schema<IAnnouncementsSchema>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  avatar: String,
  description: String,
});

const Announcements = model<IAnnouncementsSchema>(
  "Announcement",
  announcementsSchema
);

export default Announcements;
