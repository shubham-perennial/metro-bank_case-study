import { Request, Response, NextFunction } from "express";
import User from "../model/user.model";

const confirmPasswordFn = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.password === req.body.confirmPassword) {
    next();
  } else {
    return res.status(400).json("your password does not match, check again");
  }
};

/// ask someone how to import this logic to user controller as middleware.

// const findUser = async (req: Request, res: Response, next: NextFunction) => {
//     const user = await User.findOne({email: req.body.email}).lean().exec();
//     if (user) {
//         req.query.user = "true";
//     }
//     else {
//         req.query.user = "false";
//     }
//     next()
// }

export { confirmPasswordFn };
