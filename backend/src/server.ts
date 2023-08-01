import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mapRouter from "./routers/map.router";
import userRouter from "./routers/user.router";
import { dbConnect } from "./configs/database.config";
dbConnect();

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

const port = process.env.PORT || 5000;

app.use("/api/maps", mapRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
