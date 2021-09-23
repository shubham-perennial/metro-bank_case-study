"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_model_1 = __importDefault(require("../model/user.model"));
// console.log(registerModel);
const router = (0, express_1.Router)(); // this will allow us to register middleware;
// post request handler
router.post("/", async (req, res) => {
    const data = req.body;
    let user; // need to change this later
    if (data.password !== data.confirmPassword)
        return res.status(400).send({ message: "your password does not match" });
    //check if the user is already present in db
    try {
        user = await user_model_1.default.findOne({ email: req.body.email }).lean().exec();
    }
    catch (err) {
        res.status(500).send({ message: "something went wrong" });
    }
    // if user is present then send error message;
    if (user)
        return res.status(400).send({ message: "user is already present" });
    // if user is not present then create user;
    try {
        user = await user_model_1.default.create(req.body);
        return res.status(201).json({ data: user });
    }
    catch (err) {
        return res.status(500).json({ message: "something went wrong" });
    }
});
exports.default = router;
