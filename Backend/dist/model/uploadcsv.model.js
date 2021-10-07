"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class CsvTransactions extends sequelize_1.Model {
}
CsvTransactions.init({
    Name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Salery: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Company: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, { tableName: "csvTransactions", sequelize: db_1.sequelize });
exports.default = CsvTransactions;
