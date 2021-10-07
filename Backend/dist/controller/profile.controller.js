"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.createProfile = void 0;
const profile_model_1 = __importDefault(require("../model/profile.model"));
const services_model_1 = __importDefault(require("../model/services.model"));
const serviceProfile_model_1 = __importDefault(require("../model/serviceProfile.model"));
const createProfile = async (req, res) => {
    const serviceId = req.body.ServiceId;
    const userId = req.body.UserId;
    console.log(serviceId);
    const profile = await profile_model_1.default.create(req.body);
    await serviceId.map((item) => {
        serviceProfile_model_1.default.create({
            ServiceId: item,
            UserId: userId,
        });
    });
    return res.status(201).json({ data: profile }); // do with enum
};
exports.createProfile = createProfile;
const getProfile = async (req, res) => {
    const servIds = req.body.servIds;
    const profile = await profile_model_1.default.findByPk(req.params.id);
    const profileServ = await services_model_1.default.findAll({ where: { id: [...servIds] } });
    return res.status(200).json({ profile, currentServices: profileServ });
};
exports.getProfile = getProfile;
