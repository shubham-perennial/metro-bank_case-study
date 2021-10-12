import { Router } from "express";
import { addServices, getServices } from "../controller/services.controller";

const router = Router();

router.post("/", addServices);
router.get("/getservices", getServices);

export default router;
