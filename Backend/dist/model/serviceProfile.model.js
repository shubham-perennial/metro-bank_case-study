"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class ServiceProfile extends sequelize_1.Model {
}
ServiceProfile.init({
// is this ok to be empty find it as it is creating duplicate column in junction table;
}, {
    tableName: "serviceProfile",
    sequelize: db_1.sequelize,
});
exports.default = ServiceProfile;
