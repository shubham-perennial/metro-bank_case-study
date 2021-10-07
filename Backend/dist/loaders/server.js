"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const db_1 = require("../config/db");
const user_model_1 = __importDefault(require("../model/user.model"));
const services_model_1 = __importDefault(require("../model/services.model"));
const profile_model_1 = __importDefault(require("../model/profile.model"));
const serviceProfile_model_1 = __importDefault(require("../model/serviceProfile.model"));
user_model_1.default.hasOne(profile_model_1.default);
// Profile.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
services_model_1.default.belongsToMany(user_model_1.default, {
    through: serviceProfile_model_1.default,
});
user_model_1.default.belongsToMany(services_model_1.default, {
    through: serviceProfile_model_1.default,
});
index_1.default.listen(2244, async () => {
    await (0, db_1.connect)();
    await db_1.sequelize;
    await db_1.sequelize.sync();
    console.log("listen on port 2244");
});
