"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("../controller/profile.controller");
const router = (0, express_1.Router)();
router.post("/createprofile", profile_controller_1.createProfile);
router.get("/:id", profile_controller_1.getProfile);
exports.default = router;
