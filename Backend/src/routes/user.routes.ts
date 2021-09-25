import { Router } from "express";
import { login, register } from "../controller/user.controller";

const router = Router();
// const hello = () => {
//   console.log("Hello!");
// };
// router.post("/register", hello);

router.post("/register", register);
router.post("/login", login);

export default router;
