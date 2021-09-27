"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transactions_model_1 = __importDefault(require("../model/transactions.model"));
const transactionFn = async (req, res) => {
    // const transaction = await Transactions.
    const transaction = await transactions_model_1.default.create({
        file_csv: req.file?.path
    });
    return res.status(201).send({ data: transaction });
};
exports.default = transactionFn;
