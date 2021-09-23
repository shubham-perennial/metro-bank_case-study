"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_model_1 = __importDefault(require("../model/user.model"));
// console.log(registerModel);
const router = (0, express_1.Router)(); // this will allow us to register middleware;
router.post("/", async (req, res) => {
    const register = await user_model_1.default.create(req.body);
    return res.status(201).json({ data: register });
});
exports.default = router;
