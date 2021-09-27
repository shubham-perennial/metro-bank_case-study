"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactions_controller_1 = __importDefault(require("../controller/transactions.controller"));
const transactions_middleware_1 = __importDefault(require("../middlewares/transactions.middleware"));
const router = (0, express_1.Router)();
router.post("/uploadfile", transactions_middleware_1.default.single("file_csv"), transactions_controller_1.default);
exports.default = router;
