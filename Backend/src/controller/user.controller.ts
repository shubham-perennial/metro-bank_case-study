import { Router, Request, Response } from "express";
import User from "../model/user.model";
// console.log(registerModel);
const router = Router(); // this will allow us to register middleware;

router.post("/", async (req: Request, res: Response) => {
  const register = await User.create(req.body);
  return res.status(201).json({ data: register });
});

export default router;
