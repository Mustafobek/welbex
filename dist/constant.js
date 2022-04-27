"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_USERNAME = exports.DB_PASSWORD = exports.DB_PORT = exports.DB_NAME = exports.DB_HOST = exports.SERVER_PORT = void 0;
exports.SERVER_PORT = process.env.PORT || 3033;
exports.DB_HOST = process.env.DB_HOST || 'localhost';
exports.DB_NAME = process.env.DB_NAME || 'welbex-task';
exports.DB_PORT = +process.env.DB_PORT || 5432;
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'pg_8008';
exports.DB_USERNAME = process.env.DB_USERNAME || 'postgres';
