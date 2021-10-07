"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Schema, Document, model, Model } from "mongoose";
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class CsvTransactions extends sequelize_1.Model {
}
CsvTransactions.init({
    Name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Salery: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Company: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, { tableName: "csvTransactions", sequelize: db_1.sequelize });
// interface Icsv extends Document {
//   Name: string;
//   Salery: number;
//   Company: string;
// }
// const csvSchema = new Schema<Icsv>(
//   {
//     Name: { type: String, required: true },
//     Salery: { type: Number, required: true },
//     Company: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );
// const csvTransactions: Model<Icsv> = model("csvTransactions", csvSchema);
exports.default = CsvTransactions;
