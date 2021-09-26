import express, { Request, Response, NextFunction } from "express";
import router from "./routes/user.routes"
// import services from "./controller/services.controller";


const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/", router);
// app.use("/services", services);

// app.use("/services", addService);
// app.use("/profile", profile);

/// error handling middleware this will fire if any middleware before this have an error
// this middleware will be called for every request to the app as this app.use is called without any route
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: `index line no 14 ${err.message}` });
});

export default app;
