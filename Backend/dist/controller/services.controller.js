"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addservices = void 0;
const services_model_1 = __importDefault(require("../model/services.model"));
const addservices = async (req, res, next) => {
    const service = await services_model_1.default.create(req.body);
    return res.status(201).json({ data: service });
};
exports.addservices = addservices;
