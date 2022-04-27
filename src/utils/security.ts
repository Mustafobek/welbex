import jwt from "jsonwebtoken";

export const encodeToken = (payload: {_id: string}): string => {
    return jwt.sign(payload, process.env.JWT_KEY!)
}

export const decodeToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_KEY!)
}