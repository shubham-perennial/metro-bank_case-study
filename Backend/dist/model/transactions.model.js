"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Schema, Document, model, Model } from "mongoose";
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Transactions extends sequelize_1.Model {
}
Transactions.init({
    file_csv: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, { tableName: "transactions", sequelize: db_1.sequelize });
// interface Itransactions extends Document {
//   file_csv: string;
// }
// const transactionSchema = new Schema<Itransactions>(
//   {
//     file_csv: { type: String, required: true },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );
// const transactions: Model<Itransactions> = model(
//   "transaction",
//   transactionSchema
// );
exports.default = Transactions;
