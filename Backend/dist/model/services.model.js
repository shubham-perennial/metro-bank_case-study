"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Schema, Document, model, Model } from "mongoose";
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Services extends sequelize_1.Model {
}
Services.init({
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    icon_url: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    tableName: "services",
    sequelize: db_1.sequelize,
});
exports.default = Services;
