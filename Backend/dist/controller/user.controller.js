"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_model_1 = __importDefault(require("../model/user.model"));
// register function
const register = async (req, res) => {
    let user;
    try {
        user = await user_model_1.default.findOne({ email: req.body.email }).lean().exec(); // lean and exec explore it
    }
    catch (err) {
        res.status(500).send({ message: `Please check your connection and try again` }); /// proper messages // describe what went wrong
    }
    if (user)
        return res.status(400).send({ message: "User is already present" });
    try {
        user = await user_model_1.default.create(req.body);
        return res.status(201).json({ data: user });
    }
    catch (err) {
        return res.status(500).json({ message: `user cannot be created ${err}` });
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
        return res.status(404).send({ message: err });
    }
    if (!user)
        return res
            .status(404)
            .send({ message: "User not found, check your credentials" });
    if (user) {
        if (user.password === req.body.password) {
            return res.status(200).send({ message: "You have successfully logged in." });
        }
        else {
            return res.status(404).send({ message: "Login Failed, please check your email and password" });
        }
    }
};
exports.login = login;
