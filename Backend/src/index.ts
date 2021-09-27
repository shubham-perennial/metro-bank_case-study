import express, { Request, Response, NextFunction } from "express";
import userRouter from "./routes/user.routes";
import serviceRouter from "./routes/services.routes";
import profileRouter from "./routes/profile.routes";
import transactionRouter from "./routes/transactions.routes";

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/services", serviceRouter);
app.use("/profile", profileRouter);
app.use("/transactions", transactionRouter);
/// error handling middleware this will fire if any middleware before this have an error
// this middleware will be called for every request to the app as this app.use is called without any route
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: `index line no 14 ${err.message}` });
});

export default app;
