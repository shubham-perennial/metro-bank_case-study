"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    src: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});
const service = (0, mongoose_1.model)("service", serviceSchema);
exports.default = service;
