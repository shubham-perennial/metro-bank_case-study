import express, { Request, Response, NextFunction } from "express";
import userRouter from "./routes/user.routes";
import serviceRouter from "./routes/services.routes";
import profileRouter from "./routes/profile.routes";
import transactionRouter from "./routes/transactions.routes";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/services", serviceRouter);
app.use("/profiles", profileRouter);
app.use("/transactions", transactionRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: `index line no 14 ${err.message}` });
});

export default app;
