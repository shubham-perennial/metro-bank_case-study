"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const router = (0, express_1.Router)();
// const hello = () => {
//   console.log("Hello!");
// };
// router.post("/register", hello);
router.post("/register", user_controller_1.register);
router.post("/login", user_controller_1.login);
exports.default = router;
