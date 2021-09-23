"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/// creating a schema corresponding to the interface
const userSchema = new mongoose_1.Schema({
    name: { type: "string", required: false },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
    confirmPassword: { type: "string", required: true },
    dateOfIncrp: { type: "string", required: true },
}, {
    versionKey: false,
    timestamps: true,
});
/// create a model instance
const Register = (0, mongoose_1.model)("user", userSchema);
exports.default = Register;
