"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csv_parser_1 = __importDefault(require("csv-parser"));
// const csv = require("csv-parser");
const fs_1 = __importDefault(require("fs"));
const result = [];
const parseCsv = () => {
    fs_1.default.createReadStream("/home/mrcleveer/Downloads/Perennial_Training/metro bank/metro-bank_case-study/Backend/dist/uploads/2021-09-28T16:29:25.151Zdemo.csv")
        .pipe((0, csv_parser_1.default)())
        .on("data", (chunk) => {
        result.push(chunk);
    })
        .on("end", () => {
        return result;
    }); //learn what does .on does and about end also;
    // return result;
};
exports.default = parseCsv;
