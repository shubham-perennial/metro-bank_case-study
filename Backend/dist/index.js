"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const user_controller_1 = __importDefault(require("./controller/user.controller"));
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use("/register", user_controller_1.default);
/// error handling middleware this will fire if any middleware before this have an error
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
exports.default = app;
