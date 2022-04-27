"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("../database/sequelize"));
const sequelize_2 = require("sequelize");
const Post_1 = __importDefault(require("./Post"));
const User = sequelize_1.default.define('User', {
    _id: {
        type: sequelize_2.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false
    }
});
User.hasMany(Post_1.default);
Post_1.default.belongsTo(User);
exports.default = User;
