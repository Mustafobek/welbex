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
exports.login = exports.register = void 0;
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const User_1 = __importDefault(require("../model/User"));
const security_1 = require("../utils/security");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // checking username existence
        const candidate = yield User_1.default.findOne({ where: { username: req.body.username } });
        if (candidate) {
            return (0, errorHandler_1.default)(res, 400, { message: 'User with this username already exists!' });
        }
        // creating user
        const user = yield User_1.default.create({
            username: req.body.username,
            password: yield bcryptjs_1.default.hash(req.body.password, 8)
        });
        yield user.save();
        res.status(201).json({ message: 'Registered successfully' });
    }
    catch (e) {
        return (0, errorHandler_1.default)(res, 400, e);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        // finding user by its credentials
        const user = yield User_1.default.findOne({ where: { username } });
        if (!(user === null || user === void 0 ? void 0 : user._id)) {
            return (0, errorHandler_1.default)(res, 404, { message: 'User not found' });
        }
        if (!(yield bcryptjs_1.default.compare(req.body.password, user.password))) {
            return (0, errorHandler_1.default)(res, 400, { message: 'Invalid password' });
        }
        const token = (0, security_1.encodeToken)({ _id: user._id });
        delete user.password;
        res.status(200).json({ token });
    }
    catch (e) {
        return (0, errorHandler_1.default)(res, 400, e);
    }
});
exports.login = login;
