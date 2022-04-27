import errorHandler from "../utils/errorHandler";
import {Request, Response} from "express";
import User from "../model/User";
import {encodeToken} from "../utils/security";
import bcrypt from 'bcryptjs'

export const register = async (req: Request, res: Response) => {
    try {
        // checking username existence
        const candidate = await User.findOne({where: {username: req.body.username}})

        if(candidate) {
            return errorHandler(res, 400, {message: 'User with this username already exists!'})
        }

        // creating user
        const user = await User.create({
            username: req.body.username,
            password: await bcrypt.hash(req.body.password, 8)
        })
        await user.save()

        res.status(201).json({message: 'Registered successfully'})
    } catch (e: any) {
        return errorHandler(res, 400, e)
    }
}


export const login = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body

        // finding user by its credentials
        const user: any = await User.findOne({where: {username}})

        if(!user?._id) {
            return errorHandler(res, 404, {message: 'User not found'})
        }

        if (!(await bcrypt.compare(req.body.password, user.password))) {
            return errorHandler(res, 400, {message: 'Invalid password'})
        }

        const token = encodeToken({_id: user._id})

        delete user.password
        res.status(200).json({token})
    } catch (e: any) {
        return errorHandler(res, 400, e)
    }
}
