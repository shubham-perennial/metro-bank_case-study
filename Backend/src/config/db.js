"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const sequelize_1 = require("sequelize");
// const Sequelize = require("sequelize");
require("dotenv").config();
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const connect = () => {
    return mongoose_1.default.connect(`mongodb+srv://${username}:${password}@cluster0.vfxfx.mongodb.net/metroBank?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
};
exports.connect = connect;
const sequelize = new sequelize_1.Sequelize("mysql://root:perennial@2021@localhost:3306/metrobank");
exports.sequelize = sequelize;
