import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Database } from "./config/db";
import { router as locationRouter } from "./routes/location";
import {Request, Response} from "express";


// initiate database
Database.connect();

// Create Express server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 3000);

app.use("/", locationRouter);
app.all("*", (req: Request, res: Response) => res.status(404).json({ status: "404 - Not Found" }));

export default app;