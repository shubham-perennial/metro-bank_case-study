"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Services extends sequelize_1.Model {
}
Services.init({
    uuid: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    icon_url: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    tableName: "services",
    sequelize: db_1.sequelize,
});
exports.default = Services;
