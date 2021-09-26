import { Router } from "express";
import { addservices } from "../controller/services.controller";

const router = Router();

router.post("/addservices", addservices);

export default router;
