"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const user_middleware_1 = require("../middlewares/user.middleware");
// import {addservices} from "../controller/services.controller"
const router = (0, express_1.Router)();
// console.log(login);
router.post("/register", user_middleware_1.confirmPasswordFn, user_controller_1.register);
router.post("/login", user_controller_1.login);
// router.post("/services/addservices", addservices);
exports.default = router;
