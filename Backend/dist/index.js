"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const services_routes_1 = __importDefault(require("./routes/services.routes"));
const profile_routes_1 = __importDefault(require("./routes/profile.routes"));
const transactions_routes_1 = __importDefault(require("./routes/transactions.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", user_routes_1.default);
app.use("/services", services_routes_1.default);
app.use("/profiles", profile_routes_1.default);
app.use("/transactions", transactions_routes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: `index line no 14 ${err.message}` });
});
exports.default = app;
