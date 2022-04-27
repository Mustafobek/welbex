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
exports.posting = exports.deleteOne = exports.update = exports.create = exports.getOne = exports.getAll = void 0;
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const Post_1 = __importDefault(require("../model/Post"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //pagination
    let limit = 20;
    let offset = 0;
    if (req.query.limit) {
        limit = +req.query.limit;
    }
    if (req.query.offset) {
        offset = +req.query.offset;
    }
    try {
        const posts = yield Post_1.default.findAll({ where: { UserId: req.user._id }, limit, offset });
        res.status(200).json(posts);
    }
    catch (e) {
        (0, errorHandler_1.default)(res, 400, e);
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post_1.default.findOne({ where: { _id: req.params.id } });
        if (!post) {
            return (0, errorHandler_1.default)(res, 404, { message: 'Post with id not found!' });
        }
        res.status(200).json(post);
    }
    catch (e) {
        return (0, errorHandler_1.default)(res, 400, e);
    }
});
exports.getOne = getOne;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post_1.default.create(Object.assign(Object.assign({}, req.body), { UserId: req.user._id, mediaContent: req.file ? `${req.file.filename}` : '' }));
        yield post.save();
        res.status(201).json(post);
    }
    catch (e) {
        return (0, errorHandler_1.default)(res, 400, e);
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post_1.default.findOne({
            where: { UserId: req.user._id, _id: req.params.id }
        });
        if (!post) {
            return res.status(404).json({ message: 'Not found' });
        }
        for (let key in req.body) {
            // @ts-ignore
            post[key] = req.body[key];
        }
        yield post.save();
        res.status(200).json(post);
    }
    catch (e) {
        return (0, errorHandler_1.default)(res, 400, e);
    }
});
exports.update = update;
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Post_1.default.destroy({ where: { UserId: req.user._id, _id: req.params._id } });
        res.status(200).json({ success: true });
    }
    catch (e) {
        (0, errorHandler_1.default)(res, 400, e);
    }
});
exports.deleteOne = deleteOne;
// posting posts for all users
const posting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //pagination
    let limit = 20;
    let offset = 0;
    if (req.query.limit) {
        limit = +req.query.limit;
    }
    if (req.query.offset) {
        offset = +req.query.offset;
    }
    try {
        const posts = yield Post_1.default.findAll({ limit, offset });
        res.status(200).json(posts);
    }
    catch (e) {
        (0, errorHandler_1.default)(res, 400, e);
    }
});
exports.posting = posting;
