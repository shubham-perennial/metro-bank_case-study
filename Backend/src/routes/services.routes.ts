import { Router } from "express";
import { addServices, getServices } from "../controller/services.controller";

const router = Router();

router.post("/addservices", addServices);
router.get("/", getServices);

export default router;
