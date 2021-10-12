"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Transactions extends sequelize_1.Model {
}
Transactions.init({
    uuid: { type: sequelize_1.DataTypes.UUID, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    file_csv: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, { tableName: "transactions", sequelize: db_1.sequelize });
exports.default = Transactions;
