"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServices = exports.addServices = void 0;
const services_model_1 = __importDefault(require("../model/services.model"));
const addServices = async (req, res, next) => {
    const service = await services_model_1.default.create(req.body);
    return res.status(201).json({ data: service });
};
exports.addServices = addServices;
const getServices = async (req, res, next) => {
    const service = await services_model_1.default.findAll();
    return res.status(200).json({ data: service });
};
exports.getServices = getServices;
