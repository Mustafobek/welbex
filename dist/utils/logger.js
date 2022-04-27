"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    error(...args) {
        console.log(chalk_1.default.red(`[ERROR] :: ${args}`));
    }
    warning(...args) {
        console.log(chalk_1.default.yellow(`[WARNING] :: ${args}`));
    }
    info(...args) {
        console.log(chalk_1.default.green(`[INFO] :: ${args}`));
    }
}
exports.default = new Logger();
