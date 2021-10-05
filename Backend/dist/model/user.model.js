"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Schema, Model, model, Document } from "mongoose";
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
// const sequelize = new Sequelize(
//   "mysql://root:perennial@2021@localhost:3306/metrobank"
// );
/// creating Model for sql
class User extends sequelize_1.Model {
} //  /// if you do .define then no need of this method but with .define method you won't be able to access 
// properties of obj return from sql query
User.init({
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    confirmPassword: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    dateOfIncrp: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    tableName: "users",
    sequelize: db_1.sequelize,
});
// const User = sqlConnect.define("user", {
//   name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, allowNull: false },
//   password: { type: DataTypes.STRING, allowNull: false },
//   confirmPassword: { type: DataTypes.STRING, allowNull: false },
//   dateOfIncrp: { type: DataTypes.STRING, allowNull: false },
// });
exports.default = User;
