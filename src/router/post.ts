import {NextFunction, Request, Response, Router} from "express";
import auth from "../middleware/auth";
import {deleteOne} from "../controller/post.controller";

const router = Router()
const controller = require('../controller/post.controller')
const mediaUploader = require('../middleware/mediaUpload')
const errorHandler = require('../utils/errorHandler')

router.get('/', auth, controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', auth,
    mediaUploader.single('media'),
    controller.create, (err: Error, req: Request, res: Response, next: NextFunction) => errorHandler(res, 400, err))
router.patch('/:id', auth, controller.update)
router.delete('/:id', auth, controller.deleteOne)

router.get('/posts/read', controller.posting)

export default router