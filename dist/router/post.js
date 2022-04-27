"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../middleware/auth"));
const router = (0, express_1.Router)();
const controller = require('../controller/post.controller');
const mediaUploader = require('../middleware/mediaUpload');
const errorHandler = require('../utils/errorHandler');
router.get('/', auth_1.default, controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', auth_1.default, mediaUploader.single('media'), controller.create, (err, req, res, next) => errorHandler(res, 400, err));
router.patch('/:id', auth_1.default, controller.update);
router.delete('/:id', auth_1.default, controller.deleteOne);
router.get('/posts/read', controller.posting);
exports.default = router;
