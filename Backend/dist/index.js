"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const services_routes_1 = __importDefault(require("./routes/services.routes"));
const profile_routes_1 = __importDefault(require("./routes/profile.routes"));
const app = (0, express_1.default)();
const cors = require("cors");
app.use(cors());
app.use(express_1.default.json());
app.use("/user", user_routes_1.default);
app.use("/services", services_routes_1.default);
app.use("/profile", profile_routes_1.default);
/// error handling middleware this will fire if any middleware before this have an error
// this middleware will be called for every request to the app as this app.use is called without any route
app.use((err, req, res, next) => {
    res.status(500).json({ message: `index line no 14 ${err.message}` });
});
exports.default = app;
