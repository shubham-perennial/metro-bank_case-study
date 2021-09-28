"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const csvSchema = new mongoose_1.Schema({
    Name: { type: String, required: true },
    Salery: { type: String, required: true },
    Company: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
const csvTransactions = (0, mongoose_1.model)("csvTransactions", csvSchema);
exports.default = csvTransactions;
