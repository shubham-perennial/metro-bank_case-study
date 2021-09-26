"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_controller_1 = require("../controller/services.controller");
const router = (0, express_1.Router)();
router.post("/addservices", services_controller_1.addservices);
exports.default = router;
