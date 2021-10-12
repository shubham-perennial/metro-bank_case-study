import { Request, Response } from "express";
import User from "../model/user.model";
import Status from "../utility/statusCode";

// register function

const register = async (req: Request, res: Response) => {
  let user;
  try {
    user = await User.findOne({ where: { email: req.body.email } });
  } catch (err) {
    res
      .status(Status.RequestFailure)
      .send({ message: `Please check your connection and try again` });
  }
  try {
    user = await User.create(req.body);
    return res.status(Status.Created).json({ data: user });
  } catch (err) {
    return res
      .status(Status.RequestFailure)
      .json({ message: `user cannot be created ${err}` });
  }
};

// login function

const login = async (req: Request, res: Response) => {
  let user;

  try {
    user = await User.findOne({ where: { email: req.body.email } });
  } catch (err) {
    return res.status(Status.RequestFailure).send({ message: err });
  }

  if (!user)
    return res
      .status(Status.NotFound)
      .send({ message: "User not found, check your credentials" });
  if (user) {
    if (user.password === req.body.password) {
      return res
        .status(Status.Success)
        .send({ message: "You have successfully logged in." });
    } else {
      return res.status(Status.NotFound).send({
        message: "Login Failed, please check your email and password",
      });
    }
  }
};

export { register, login };
