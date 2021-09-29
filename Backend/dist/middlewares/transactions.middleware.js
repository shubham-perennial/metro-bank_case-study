"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Request } from "express";
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path_1.default.join(__dirname, "../uploads"));
    },
    filename: function (req, file, callback) {
        callback(null, new Date().toISOString() + file.originalname); /// try with client id
    },
});
//   C:\Users\Perennial\Downloads\perennial\Training\Ts-Assignment\metro-bank_case-study\Backend\dist\uploads
// console.log(path);
// const fileFilter = (
//   req: Request,
//   file: Express.Multer.File,
//   callback: Callback
// ) => {
//   if (file.mimetype === "csv") {
//     callback(true);
//   } else {
//     callback(false);
//   }
// };
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 2 }, /// make it const and also make file type const
    // fileFilter: fileFilter,
});
exports.default = upload;
