"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const User_1 = __importDefault(require("../model/User"));
const security_1 = require("../utils/security");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        if (!token) {
            return (0, errorHandler_1.default)(res, 400, { message: "Invalid token string!" });
        }
        const decoded = (0, security_1.decodeToken)(token);
        const user = yield User_1.default.findOne({ where: { _id: decoded._id } });
        if (!user) {
            (0, errorHandler_1.default)(res, 400, { message: 'User was not found!' });
        }
        req.user = user;
        req.token = token;
        next();
    }
    catch (e) {
        (0, errorHandler_1.default)(res, 400, { message: "Invalid token string!" });
    }
});
