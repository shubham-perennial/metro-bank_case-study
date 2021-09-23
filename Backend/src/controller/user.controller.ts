import { Router, Request, Response } from "express";
import User from "../model/user.model";
// console.log(registerModel);
const router = Router(); // this will allow us to register middleware;

interface data {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfIncrp: string;
}

router.post("/", async (req: Request, res: Response) => {
  const data: data = req.body;
  if (data.password !== data.confirmPassword)
    return res.status(400).send({ message: "your password does not match" });
  try {
    const register = await User.create(req.body);
    return res.status(201).json({ data: register });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
});

export default router;
