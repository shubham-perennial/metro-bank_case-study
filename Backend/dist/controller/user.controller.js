"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const user_model_1 = __importDefault(require("../model/user.model"));
const statusCode_1 = __importDefault(require("../utility/statusCode"));
// register function
const register = async (req, res) => {
    let user;
    try {
        user = await user_model_1.default.findOne({ where: { email: req.body.email } });
    }
    catch (err) {
        res
            .status(statusCode_1.default.RequestFailure)
            .send({ message: `Please check your connection and try again` });
    }
    try {
        user = await user_model_1.default.create(req.body);
        return res.status(statusCode_1.default.Created).send({ data: user });
    }
    catch (err) {
        return res
            .status(statusCode_1.default.RequestFailure)
            .send({ message: `user cannot be created ${err}` });
    }
};
exports.register = register;
// login function
const login = async (req, res) => {
    let user;
    try {
        user = await user_model_1.default.findOne({ where: { email: req.body.email } });
    }
    catch (err) {
        return res.status(statusCode_1.default.RequestFailure).send({ message: err });
    }
    if (!user)
        return res
            .status(statusCode_1.default.NotFound)
            .send({ message: "User not found, check your credentials" });
    if (user) {
        if (user.password === req.body.password) {
            return res
                .status(statusCode_1.default.Success)
                .send({ message: "You have successfully logged in." });
        }
        else {
            return res.status(statusCode_1.default.NotFound).send({
                message: "Login Failed, please check your email and password",
            });
        }
    }
};
exports.login = login;
