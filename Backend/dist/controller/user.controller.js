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
    const data = req.body;
    if (data.password !== data.confirmPassword)
        return res.status(400).send({ message: "your password does not match" });
    try {
        const register = await user_model_1.default.create(req.body);
        return res.status(201).json({ data: register });
    }
    catch (err) {
        return res.status(500).json({ message: "something went wrong" });
    }
});
exports.default = router;
