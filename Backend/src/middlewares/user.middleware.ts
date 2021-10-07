import { Request, Response, NextFunction } from "express";

const confirmPasswordFn = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.password === req.body.confirmPassword) {
    next();
  } else {
    return res.status(400).json("your password does not match, check again");
  }
};

export { confirmPasswordFn };
