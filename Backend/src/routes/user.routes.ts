import { Router } from "express";
import { login, register } from "../controller/user.controller";
import { confirmPasswordFn } from "../middlewares/user.middleware";

const router = Router();
router.post("/register", confirmPasswordFn, register);
router.post("/login", login);

export default router;
