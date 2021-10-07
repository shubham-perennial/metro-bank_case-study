"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServicesForProfile = void 0;
const serviceProfile_model_1 = __importDefault(require("../model/serviceProfile.model"));
const getServicesForProfile = async (req, res, next) => {
    const userId = req.params.id;
    const serviceIds = await serviceProfile_model_1.default.findAll({
        where: { UserId: userId },
    });
    const array = [];
    serviceIds.map((item) => array.push(item.ServiceId));
    req.body.servIds = array;
    next();
};
exports.getServicesForProfile = getServicesForProfile;
