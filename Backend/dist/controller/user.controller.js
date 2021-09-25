"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_model_1 = __importDefault(require("../model/user.model"));
// register function
const register = async (req, res) => {
    const data = req.body;
    let user; // need to change this later
    if (data.password !== data.confirmPassword)
        return res.status(400).send({ message: "your password does not match" }); // use proper status codes
    try {
        user = await user_model_1.default.findOne({ email: req.body.email }).lean().exec(); // lean and exec explore it
    }
    catch (err) {
        res.status(500).send({ message: "something went wrong" }); /// proper messages // describe what went wrong
    }
    if (user)
        return res.status(400).send({ message: "user is already present" });
    try {
        user = await user_model_1.default.create(req.body);
        return res.status(201).json({ data: user });
    }
    catch (err) {
        return res.status(500).json({ message: "something went wrong" });
    }
};
exports.register = register;
// login function
const login = async (req, res) => {
    let user;
    try {
        user = await user_model_1.default.findOne({ email: req.body.email }).exec();
    }
    catch (err) {
        return res.status(404).send({ message: "something went wrong" });
    }
    if (!user)
        return res
            .status(404)
            .send({ message: "user not found, check credentials" });
    if (user) {
        if (user.password === req.body.password) {
            return res.status(200).send({ message: "login successful" });
        }
        else {
            return res.status(404).send({ message: "login failed" });
        }
    }
};
exports.login = login;
