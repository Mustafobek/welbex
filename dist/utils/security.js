"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.encodeToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const encodeToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_KEY);
};
exports.encodeToken = encodeToken;
const decodeToken = (token) => {
    return jsonwebtoken_1.default.verify(token, process.env.JWT_KEY);
};
exports.decodeToken = decodeToken;
