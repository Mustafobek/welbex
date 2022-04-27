"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const constant_1 = require("../constant");
exports.default = new sequelize_1.Sequelize({
    host: constant_1.DB_HOST,
    database: constant_1.DB_NAME,
    username: constant_1.DB_USERNAME,
    port: constant_1.DB_PORT,
    dialect: 'postgres',
    password: constant_1.DB_PASSWORD
});
