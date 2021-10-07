import { NextFunction, Response, Request, json } from "express";
import ServiceProfile from "../model/serviceProfile.model";

const getServicesForProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;
  const serviceIds = await ServiceProfile.findAll({
    where: { UserId: userId },
  });
  const array: number[] = [];
  serviceIds.map((item: any) => array.push(item.ServiceId));

  req.body.servIds = array;

  next();
};

export { getServicesForProfile };
