"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("../database/sequelize"));
const sequelize_2 = require("sequelize");
const Post = sequelize_1.default.define('Post', {
    _id: {
        type: sequelize_2.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false
    },
    textContent: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false
    },
    mediaContent: {
        type: sequelize_2.DataTypes.STRING,
    }
});
exports.default = Post;
