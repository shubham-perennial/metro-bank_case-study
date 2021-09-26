"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/// creating a schema corresponding to the interface
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    dateOfIncrp: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});
/// create a model instance
const Register = (0, mongoose_1.model)("user", userSchema);
exports.default = Register;
