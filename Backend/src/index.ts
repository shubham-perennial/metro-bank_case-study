import express, { Request, Response, NextFunction } from "express";
const cors = require("cors");
import { register, login } from "./controller/user.controller";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", register);
app.post("/login", login);

/// error handling middleware this will fire if any middleware before this have an error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;
