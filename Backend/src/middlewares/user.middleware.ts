import { Request, Response, NextFunction } from "express";
import { ObjectId } from "mongoose";
import Service from "../model/services.model";
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
interface service {
  _id: ObjectId;
  title: string;
  src: string;
  createdAt: string;
  updatedAt: string;
}

// const availableServicesFn = async (
//   req: Request,
//   res: Response,
//   currentServices: any
// ) => {
//   const services: any = await Service.findById(req.params.id);
//   let array: any;
//   const serviceIds = services.map((item:service) => {
//     array.push(item._id);
//   })
//   console.log(array, currentServices);
// };

export { confirmPasswordFn };
