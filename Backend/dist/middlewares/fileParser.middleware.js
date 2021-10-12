"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const get_stream_1 = __importDefault(require("get-stream"));
const result = [];
const parseCsv = async (filepath) => {
    try {
        const parseStream = (0, csv_parser_1.default)();
        const data = await get_stream_1.default.array(fs_1.default.createReadStream(filepath).pipe(parseStream));
        return data;
    }
    catch (err) {
        return "data parsing failed with csv parser";
    }
};
exports.default = parseCsv;
