import { Request, Response } from "express";
import User from "../model/user.model";

// register function

const register = async ( req: Request, res: Response) => {
  
  let user;
  try {
    user = await User.findOne({ email: req.body.email }).lean().exec(); // lean and exec explore it
  } catch (err) {
    res.status(500).send({ message: `Please check your connection and try again` }); /// proper messages // describe what went wrong
  }
  if (user) return res.status(400).send({ message: "User is already present" });
  try {
    user = await User.create(req.body);
    return res.status(201).json({ data: user });
  } catch (err) {
    return res.status(500).json({ message: `user cannot be created ${err}` });
  }
};

// login function

const login = async (req: Request, res: Response) => {
  let user;

  try {
    user = await User.findOne({ email: req.body.email }).exec();
  } catch (err) {
    return res.status(404).send({ message: err });
  }

  if (!user)
    return res
      .status(404)
      .send({ message: "User not found, check your credentials" });

  if (user) {
    if (user.password === req.body.password) {
      return res.status(200).send({ message: "You have successfully logged in." });
    } else {
      return res.status(404).send({ message: "Login Failed, please check your email and password" });
    }
  }
};

export { register, login };
