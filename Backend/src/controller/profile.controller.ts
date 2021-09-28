import Profile from "../model/profile.model";
import { Request, Response } from "express";

const createProfile = async (req: Request, res: Response) => {
  const profile = await Profile.create(req.body);
  return res.status(201).json({ data: profile });  // do with enum
};

const getProfile = async (req: Request, res: Response) => {
  const profile = await Profile.findById(req.params.id)
    .populate("currentServices")
    .populate("userId");
  return res.status(200).json({ data: profile });
};

export { createProfile, getProfile };
