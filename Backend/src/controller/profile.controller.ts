import Profile from "../model/profile.model";
import { Request, Response } from "express";
import Services from "../model/services.model";
import ServiceProfile from "../model/serviceProfile.model";

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

  return res.status(201).json({ data: profile }); // do with enum
};

const getProfile = async (req: Request, res: Response) => {
  const servIds = req.body.servIds;
  const profile = await Profile.findByPk(req.params.id);
  const profileServ = await Services.findAll({ where: { id: [...servIds] } });

  return res.status(200).json({ profile, currentServices: profileServ });
};

export { createProfile, getProfile };
