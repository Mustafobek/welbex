"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller = require('../controller/auth.controller');
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/register', controller.register);
router.post('/login', controller.login);
exports.default = router;
