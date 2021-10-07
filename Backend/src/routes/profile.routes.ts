import { Router } from "express";
import { createProfile, getProfile } from "../controller/profile.controller";
import { getServicesForProfile } from "../middlewares/getProfile.middleware";

const router = Router();

router.post("/createprofile", createProfile);
router.get("/:id", getServicesForProfile, getProfile);

export default router;
