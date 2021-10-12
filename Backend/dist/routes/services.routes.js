"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_controller_1 = require("../controller/services.controller");
const router = (0, express_1.Router)();
router.post("/", services_controller_1.addServices);
router.get("/getservices", services_controller_1.getServices);
exports.default = router;
