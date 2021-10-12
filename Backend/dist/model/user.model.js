"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class User extends sequelize_1.Model {
}
User.init({
    uuid: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    confirmPassword: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    dateOfIncrp: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    tableName: "users",
    sequelize: db_1.sequelize,
});
exports.default = User;
