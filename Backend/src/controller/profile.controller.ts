import Profile from "../model/profile.model";
import { NextFunction, Request, Response } from "express";
import Services from "../model/services.model";
import ServiceProfile from "../model/serviceProfile.model";
import Status from "../utility/statusCode";

const createProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const serviceId = req.body.ServiceId;
  const userId = req.body.UserId;
  try {
    const profile = await Profile.create(req.body);

    await serviceId.map((item: number) => {
      ServiceProfile.create({
        ServiceId: item,
        UserId: userId,
      });
    });

    return res.status(Status.Created).json({ data: profile });
  } catch (err) {
    return res.status(Status.RequestFailure).json({ message: err });
  }
};

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  const servIds = req.body.servIds;
  try {
    const profile = await Profile.findByPk(req.params.id);
    const profileServ = await Services.findAll({ where: { id: [...servIds] } });
    return res
      .status(Status.Success)
      .json({ profile});
  } catch (err) {
    return res.status(Status.RequestFailure).json({ message: err });
  }
};

export { createProfile, getProfile };
