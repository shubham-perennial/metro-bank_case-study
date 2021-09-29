"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = exports.uploadTransaction = void 0;
const transactions_model_1 = __importDefault(require("../model/transactions.model"));
const uploadcsv_model_1 = __importDefault(require("../model/uploadcsv.model"));
const fileParser_middleware_1 = __importDefault(require("../middlewares/fileParser.middleware"));
const uploadTransaction = async (req, res) => {
    const transaction = await transactions_model_1.default.create({
        file_csv: req.file?.path,
    });
    if (req.file?.path) {
        const path = await (0, fileParser_middleware_1.default)(req.file?.path);
        console.log(path);
        const csvTransactions = await uploadcsv_model_1.default.create(path);
        return res.status(201).send({ message: "file uploaded successfully" });
    }
    else {
        return res.status(404).send({ message: "Please upload the file" });
    }
};
exports.uploadTransaction = uploadTransaction;
const getTransactions = async (req, res) => {
    const csvtransaction = await uploadcsv_model_1.default.find().lean().exec();
    return res.status(200).send({ data: csvtransaction });
};
exports.getTransactions = getTransactions;
