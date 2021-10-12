import { NextFunction, Response, Request, json } from "express";
import ServiceProfile from "../model/serviceProfile.model";
import Status from "../utility/statusCode";

const getServicesForProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  const array: number[] = [];
  try {
    const serviceIds = await ServiceProfile.findAll({
      where: { UserId: userId },
    });
    serviceIds.map((item: any) => array.push(item.ServiceId));
    req.body.servIds = array;
    next();
  } catch (err) {
    return res.status(Status.RequestFailure).json({ message: err });
  }
};

export { getServicesForProfile };
