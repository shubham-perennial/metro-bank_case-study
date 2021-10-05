import { NextFunction, Response, Request } from "express";
import Services from "../model/services.model";

const addServices = async (req: Request, res: Response, next: NextFunction) => {
  const service = await Services.create(req.body);
  return res.status(201).json({ data: service });
};

const getServices = async (req: Request, res: Response, next: NextFunction) => {
  const service = await Services.findAll();
  return res.status(200).json({ data: service });
};

export { addServices, getServices };
