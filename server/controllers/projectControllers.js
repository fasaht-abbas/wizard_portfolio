import projectModel from "../models/projectModel.js";
import fs from "fs";
export const newProjectController = async (req, res) => {
  try {
    const { title, description, link } = req.fields;
    const { photo } = req.files;

    if (!title || !description || !link) {
      res.status(404).send({
        success: false,
        message: "Something is missing",
      });
    } else {
      const project = new projectModel({
        title: title,
        link: link,
        description: description,
      });
      if (photo) {
        project.photo.data = fs.readFileSync(photo.path);
        project.photo.contentType = photo.type;
      }
      await project.save();

      res.status(200).send({
        success: true,
        message: "project created",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
