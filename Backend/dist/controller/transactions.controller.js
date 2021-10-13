"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = exports.uploadTransaction = void 0;
const transactions_model_1 = __importDefault(require("../model/transactions.model"));
const uploadcsv_model_1 = __importDefault(require("../model/uploadcsv.model"));
const fileParser_middleware_1 = __importDefault(require("../middlewares/fileParser.middleware"));
const statusCode_1 = __importDefault(require("../utility/statusCode"));
const uploadTransaction = async (req, res) => {
    try {
        const transaction = await transactions_model_1.default.create({
            file_csv: req.file?.path,
        });
        if (req.file?.path) {
            let csvObj;
            try {
                csvObj = await (0, fileParser_middleware_1.default)(req.file?.path);
            }
            catch (err) {
                return res
                    .status(statusCode_1.default.RequestFailure)
                    .json({ message: "promise rejected at csv parser" });
            }
            try {
                const csvTransactions = await uploadcsv_model_1.default.bulkCreate(csvObj);
                return res
                    .status(statusCode_1.default.Created)
                    .send({ message: "file uploaded successfully" });
            }
            catch (err) {
                return res
                    .status(statusCode_1.default.RequestFailure)
                    .json({ message: "bulk data upload failed to sql" });
            }
        }
        else {
            return res
                .status(statusCode_1.default.NotFound)
                .send({ message: "Please upload the file" });
        }
    }
    catch (err) {
        return res
            .status(statusCode_1.default.RequestFailure)
            .json({ message: "file path upload failed" });
    }
};
exports.uploadTransaction = uploadTransaction;
const getTransactions = async (req, res) => {
    let limit, page;
    req.query.limit ? (limit = Number(req.query.limit)) : (limit = 10);
    req.query.page ? (page = Number(req.query.page)) : (page = 1);
    try {
        const csvtransaction = await uploadcsv_model_1.default.findAll({
            order: [["id", "ASC"]],
            limit: limit,
            offset: limit * page - limit,
        });
        return res.status(statusCode_1.default.Success).send({ data: csvtransaction });
    }
    catch (err) {
        return res
            .status(statusCode_1.default.RequestFailure)
            .send({ message: "cannot fetch transactions" });
    }
};
exports.getTransactions = getTransactions;
