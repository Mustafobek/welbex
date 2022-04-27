"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
exports.default = (response, statusCode, error) => {
    response.status(statusCode).json({
        error: error.message ? error.message : error,
    });
};
class Error {
}
exports.Error = Error;
