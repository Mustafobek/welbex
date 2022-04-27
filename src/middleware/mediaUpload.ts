import multer, {FileFilterCallback} from 'multer'
import moment from 'moment'
import path from "path";
import {Request} from "express";

const storage = multer.diskStorage({
    destination: 'assets/media/',
    filename: (req: Request, file, cb) => {
        cb(null, file.fieldname + '-' + moment().format('DDMMYYYY-HHmmss_SSS') + path.extname(file.originalname))
    }
})

const uploadMedia = multer({
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB
    },
    fileFilter: (req: Request, file, cb: FileFilterCallback): void => {
        if(!file.originalname.match(/\.(png|jpg|jpeg|gif|mp3|mp4|avi|mkv)$/)) {
            // @ts-ignore
            return cb(Error('Valid file types are png, jpg, jpeg, gif, mp3, mp4, avi, mkv only!'), false)
        }

        cb(null, true)
    }
})

module.exports = uploadMedia