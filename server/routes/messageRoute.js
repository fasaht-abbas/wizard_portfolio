import express from "express";
import { handleMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/send-message", handleMessage);

export default router;
