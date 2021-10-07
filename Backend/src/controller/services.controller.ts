import { NextFunction, Response, Request } from "express";
import Services from "../model/services.model";
import Status from "../utility/statusCode";

const addServices = async (req: Request, res: Response, next: NextFunction) => {
  const service = await Services.create(req.body);
  return res.status(Status.Created).json({ data: service });
};

const getServices = async (req: Request, res: Response, next: NextFunction) => {
  const service = await Services.findAll();
  return res.status(Status.Success).json({ data: service });
};

export { addServices, getServices };
