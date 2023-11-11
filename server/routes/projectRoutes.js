import express from "express";
import { newProjectController } from "../controllers/projectControllers.js";
import formidable from "express-formidable";

const router = express.Router();

router.post("/new-project", formidable(), newProjectController);

export default router;
