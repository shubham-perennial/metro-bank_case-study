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
// import parseCsv from "./middlewares/fileParser.middleware";
const app = (0, express_1.default)();
const cors = require("cors"); // do npm i @types/cors
app.use(cors());
app.use(express_1.default.json());
app.use("/user", user_routes_1.default);
app.use("/services", services_routes_1.default);
app.use("/profile", profile_routes_1.default);
app.use("/transactions", transactions_routes_1.default);
// const data = parseCsv(
//   "/home/mrcleveer/Downloads/Perennial_Training/metro bank/metro-bank_case-study/Backend/dist/uploads/2021-09-29T15:20:00.185Zdummy.csv"
// );
// console.log(data);
/// error handling middleware this will fire if any middleware before this have an error
// this middleware will be called for every request to the app as this app.use is called without any route
app.use((err, req, res, next) => {
    res.status(500).json({ message: `index line no 14 ${err.message}` });
});
exports.default = app;
