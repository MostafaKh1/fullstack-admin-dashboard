import express from "express";
import {
  getAnnouncements,
  addAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "../controllers/announcement";
import upload from "../upload";

const route = express.Router();

route.get("/", getAnnouncements);
route.post("/", upload.single("image"), addAnnouncement);
route.patch("/:id", updateAnnouncement);
route.delete("/:id", deleteAnnouncement);

export default route;
