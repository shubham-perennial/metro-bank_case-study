import { Request, Response } from "express";
import User from "../model/user.model";
// console.log(registerModel);

// structure for the object here // here naming should be more specific

interface data {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfIncrp: string;
}

// register function

const register = async (req: Request, res: Response) => {
  const data: data = req.body;
  let user; // need to change this later
  if (data.password !== data.confirmPassword)
    return res.status(400).send({ message: "your password does not match" }); // use proper status codes

  try {
    user = await User.findOne({ email: req.body.email }).lean().exec(); // lean and exec explore it
  } catch (err) {
    res.status(500).send({ message: "something went wrong" }); /// proper messages // describe what went wrong
  }

  if (user) return res.status(400).send({ message: "user is already present" });

  try {
    user = await User.create(req.body);
    return res.status(201).json({ data: user });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
};

// login function

const login = async (req: Request, res: Response) => {
  let user;

  try {
    user = await User.findOne({ email: req.body.email }).exec();
  } catch (err) {
    return res.status(404).send({ message: "something went wrong" });
  }

  if (!user)
    return res
      .status(404)
      .send({ message: "user not found, check credentials" });

  if (user) {
    if (user.password === req.body.password) {
      return res.status(200).send({ message: "login successful" });
    } else {
      return res.status(404).send({ message: "login failed" });
    }
  }
};

export { register, login };
