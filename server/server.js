import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./configs/database.js";
import colors from "colors";
import projectRoutes from "./routes/projectRoutes.js";
import messageRoutes from "./routes/messageRoute.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// config the dot env file
dotenv.config();

// connecting the data base
connectDB();

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));

//ROUTES
app.use("/api/v1/project", projectRoutes);
app.use("/api/v1/message", messageRoutes);

const port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.send("this is working");
});

app.listen(port, () => {
  console.log(`The app is listening on the ${port}`.bgGreen);
});

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
