import { Router, Request, Response } from "express";
import User from "../model/user.model";
// console.log(registerModel);
const router = Router(); // this will allow us to register middleware;

// structure for the object here
interface data {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfIncrp: string;
}

// post request handler

const register = async (req: Request, res: Response) => {
  const data: data = req.body;
  let user; // need to change this later
  if (data.password !== data.confirmPassword)
    return res.status(400).send({ message: "your password does not match" });
  //check if the user is already present in db
  try {
    user = await User.findOne({ email: req.body.email }).lean().exec();
  } catch (err) {
    res.status(500).send({ message: "something went wrong" });
  }
  // if user is present then send error message;
  if (user) return res.status(400).send({ message: "user is already present" });

  // if user is not present then create user;
  try {
    user = await User.create(req.body);
    return res.status(201).json({ data: user });
  } catch (err) {
    return res.status(500).json({ message: "something went wrong" });
  }
};
const login = async (req: Request, res: Response) => {
  // const data = req.body;
  let user;
  // check if the user is present or not
  try {
    user = await User.findOne({ email: req.body.email }).exec();
  } catch (err) {
    return res.status(404).send({ message: "something went wrong" });
  }
  // if not present give error
  if (!user)
    return res
      .status(404)
      .send({ message: "user not found, check credentials" });
  // if user is present check for password;
  if (user) {
    if (user.password === req.body.password) {
      return res.status(200).send({ message: "login successful" });
    } else {
      return res.status(404).send({ message: "login failed" });
    }
  }
};

export { register, login };
