import {Response} from "express";

export default (response: Response, statusCode: number, error: Error) => {
    response.status(statusCode).json({
        error: error.message ? error.message : error,
    })
}

export class Error implements Error {
    message: string | undefined;
}