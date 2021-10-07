"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fileSize = (1024 * 1024 * 2);
const storage = multer_1.default.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path_1.default.join(__dirname, "../uploads"));
    },
    filename: function (req, file, callback) {
        callback(null, new Date().toISOString() + file.originalname); /// try with client id replace date
    },
});
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
    limits: { fileSize: fileSize },
    // fileFilter: fileFilter,
});
exports.default = upload;
