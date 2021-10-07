import Profile from "../model/profile.model";
import { Request, Response } from "express";
import Services from "../model/services.model";
import ServiceProfile from "../model/serviceProfile.model";
import Status from "../utility/statusCode";


const createProfile = async (req: Request, res: Response) => {
  const serviceId = req.body.ServiceId;
  const userId = req.body.UserId;
  console.log(serviceId);
  const profile = await Profile.create(req.body);

  await serviceId.map((item: number) => {
    ServiceProfile.create({
      ServiceId: item,
      UserId: userId,
    });
  });

  return res.status(Status.Success).json({ data: profile });
};

const getProfile = async (req: Request, res: Response) => {
  const servIds = req.body.servIds;
  const profile = await Profile.findByPk(req.params.id);
  const profileServ = await Services.findAll({ where: { id: [...servIds] } });

  return res
    .status(Status.Success)
    .json({ profile, currentServices: profileServ });
};

export { createProfile, getProfile };
