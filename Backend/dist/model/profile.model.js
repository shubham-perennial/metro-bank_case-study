"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    accountNo: { type: Number, required: true },
    income: { type: Number, required: true },
    spends: { type: Number, required: true },
    currentServices: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "service", required: true }],
    availableServices: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "service", required: true }]
}, {
    versionKey: false,
    timestamps: true,
});
const Profile = (0, mongoose_1.model)("profile", profileSchema);
exports.default = Profile;
