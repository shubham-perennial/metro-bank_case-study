import { NextFunction, Response, Request, Router } from "express";
import Services from "../model/services.model";

const addservices = async (req: Request, res: Response, next: NextFunction) => {
  const service = await Services.create(req.body);
  return res.status(201).json({ data: service });
};

export { addservices };
