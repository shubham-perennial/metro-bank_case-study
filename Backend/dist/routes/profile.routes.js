"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("../controller/profile.controller");
const getProfile_middleware_1 = require("../middlewares/getProfile.middleware");
const router = (0, express_1.Router)();
router.post("/createprofile", profile_controller_1.createProfile);
router.get("/:id", getProfile_middleware_1.getServicesForProfile, profile_controller_1.getProfile);
exports.default = router;
