import errorHandler from "../utils/errorHandler";
import {Request, Response} from "express";
import Post from "../model/Post";
import {RequestWithUser} from "../middleware/auth";
import {where} from "sequelize";

export const getAll = async (req: RequestWithUser, res: Response) => {
    //pagination
    let limit = 20
    let offset = 0

    if(req.query.limit) {
        limit = +req.query.limit
    }

    if(req.query.offset) {
        offset = +req.query.offset
    }

    try {
        const posts = await Post.findAll({where: {UserId: req.user._id}, limit, offset})

        res.status(200).json(posts)
    } catch (e: any) {
        errorHandler(res, 400, e)
    }
}


export const getOne = async (req: RequestWithUser, res: Response) => {
    try {
        const post = await Post.findOne({where: {_id: req.params.id}})

        if(!post) {
            return errorHandler(res, 404, {message: 'Post with id not found!'})
        }

        res.status(200).json(post)
    } catch (e: any) {
        return errorHandler(res, 400, e)
    }
}

export const create = async (req: RequestWithUser, res: Response) => {
    try {
        const post = await Post.create({
            ...req.body,
            UserId: req.user._id,
            mediaContent: req.file ? `${req.file.filename}` : ''
        })

        await post.save()

        res.status(201).json(post)
    } catch (e: any) {
        return errorHandler(res, 400, e)
    }
}

export const update = async (req: RequestWithUser, res: Response) => {
    try {
        const post = await Post.findOne({
            where: {UserId: req.user._id, _id: req.params.id}
        })

        if(!post) {
            return res.status(404).json({message: 'Not found'})
        }

        for (let key in req.body) {
            // @ts-ignore
            post[key] = req.body[key]
        }

        await post.save()

        res.status(200).json(post)
    } catch (e: any) {
        return errorHandler(res, 400, e)
    }
}

export const deleteOne = async (req: RequestWithUser, res: Response) => {
    try {
        await Post.destroy({where: {UserId: req.user._id, _id: req.params._id}})

        res.status(200).json({success: true})
    } catch (e: any) {
        errorHandler(res, 400, e)
    }
}

// posting posts for all users

export const posting = async (req: Request, res: Response) => {
    //pagination
    let limit = 20
    let offset = 0

    if(req.query.limit) {
        limit = +req.query.limit
    }

    if(req.query.offset) {
        offset = +req.query.offset
    }

    try {
        const posts = await Post.findAll({limit, offset})

        res.status(200).json(posts)
    } catch (e: any) {
        errorHandler(res, 400, e)
    }
}