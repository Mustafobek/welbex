import {NextFunction, Request, Response} from "express";
import errorHandler from "../utils/errorHandler";
import User from "../model/User";
import {decodeToken} from "../utils/security";

export default async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '')

        if(!token) {
            return errorHandler(res, 400, {message: "Invalid token string!"})
        }
        const decoded = decodeToken(token) as decodedToken
        const user = await User.findOne({where: {_id: decoded._id}})

        if(!user) {
            errorHandler(res, 400, {message: 'User was not found!'})
        }

        req.user = user
        req.token = token

        next()
    } catch (e) {
        errorHandler(res, 400, {message: "Invalid token string!"})
    }
}

// @ts-ignore
export type RequestWithUser = Request & User
export interface decodedToken {
    _id: string
}