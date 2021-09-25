import express, { Request, Response, NextFunction } from "express";
const cors = require("cors");
import router from "./routes/user.routes"
import {login,register} from "./controller/user.controller"
const app = express();
app.use(cors());
app.use(express.json());

// const hello = () => {
//   console.log("hello");
// }

app.use("/user",router);
// app.post("/user", hello);
app.post("/register", register);
app.post("/login", login);

/// error handling middleware this will fire if any middleware before this have an error
// this middleware will be called for every request to the app as this app.use is called without any route
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app;
