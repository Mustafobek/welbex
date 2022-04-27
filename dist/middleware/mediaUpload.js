"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const moment_1 = __importDefault(require("moment"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: 'assets/media/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + (0, moment_1.default)().format('DDMMYYYY-HHmmss_SSS') + path_1.default.extname(file.originalname));
    }
});
const uploadMedia = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB
    },
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(png|jpg|jpeg|gif|mp3|mp4|avi|mkv)$/)) {
            // @ts-ignore
            return cb(Error('Valid file types are png, jpg, jpeg, gif, mp3, mp4, avi, mkv only!'), false);
        }
        cb(null, true);
    }
});
module.exports = uploadMedia;
