"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.createProfile = void 0;
const profile_model_1 = __importDefault(require("../model/profile.model"));
const createProfile = async (req, res) => {
    const profile = await profile_model_1.default.create(req.body);
    return res.status(201).json({ data: profile });
};
exports.createProfile = createProfile;
const getProfile = async (req, res) => {
    const profile = await profile_model_1.default.findById(req.params.id)
        .populate("currentServices")
        .populate("userId");
    return res.status(200).json({ data: profile });
};
exports.getProfile = getProfile;
