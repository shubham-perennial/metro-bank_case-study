import express, { Request, Response, NextFunction } from "express";
const cors = require("cors");
import userController from "./controller/user.controller";
const app = express();
app.use(cors())
app.use(express.json())

app.use("/register", userController);

/// error handling middleware this will fire if any middleware before this have an error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;
