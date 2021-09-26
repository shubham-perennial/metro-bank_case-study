import { Router } from "express";
import { login, register } from "../controller/user.controller";
import { confirmPasswordFn } from "../middlewares/user.middleware";
// import {addservices} from "../controller/services.controller"

const router = Router();

// console.log(login);

router.post("/register", confirmPasswordFn, register);
router.post("/login", login);
// router.post("/services/addservices", addservices);

export default router;
