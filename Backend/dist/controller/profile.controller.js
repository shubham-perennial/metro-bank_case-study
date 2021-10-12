"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.createProfile = void 0;
const profile_model_1 = __importDefault(require("../model/profile.model"));
const services_model_1 = __importDefault(require("../model/services.model"));
const serviceProfile_model_1 = __importDefault(require("../model/serviceProfile.model"));
const statusCode_1 = __importDefault(require("../utility/statusCode"));
const createProfile = async (req, res, next) => {
    const serviceId = req.body.ServiceId;
    const userId = req.body.UserId;
    try {
        const profile = await profile_model_1.default.create(req.body);
        await serviceId.map((item) => {
            serviceProfile_model_1.default.create({
                ServiceId: item,
                UserId: userId,
            });
        });
        return res.status(statusCode_1.default.Created).json({ data: profile });
    }
    catch (err) {
        return res.status(statusCode_1.default.RequestFailure).json({ message: err });
    }
};
exports.createProfile = createProfile;
const getProfile = async (req, res, next) => {
    const servIds = req.body.servIds;
    try {
        const profile = await profile_model_1.default.findByPk(req.params.id);
        const profileServ = await services_model_1.default.findAll({ where: { id: [...servIds] } });
        return res
            .status(statusCode_1.default.Success)
            .json({ profile });
    }
    catch (err) {
        return res.status(statusCode_1.default.RequestFailure).json({ message: err });
    }
};
exports.getProfile = getProfile;
