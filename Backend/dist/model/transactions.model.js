"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    file_csv: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
const transactions = (0, mongoose_1.model)("transaction", transactionSchema);
exports.default = transactions;
