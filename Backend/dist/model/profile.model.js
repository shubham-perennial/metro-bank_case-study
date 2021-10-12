"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Document, Model, model, Schema } from "mongoose";
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Profile extends sequelize_1.Model {
}
Profile.init({
    uuid: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    accountNo: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    income: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    spends: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
}, {
    tableName: "profiles",
    sequelize: db_1.sequelize,
});
exports.default = Profile;
