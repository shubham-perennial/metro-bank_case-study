import { Router } from "express";
import { createProfile, getProfile } from "../controller/profile.controller";

const router = Router();

router.post("/createprofile", createProfile);
router.get("/:id", getProfile);

export default router;
