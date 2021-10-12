"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const user_middleware_1 = require("../middlewares/user.middleware");
const router = (0, express_1.Router)();
router.post("/", user_middleware_1.confirmPasswordFn, user_controller_1.register);
router.post("/login", user_controller_1.login);
exports.default = router;
