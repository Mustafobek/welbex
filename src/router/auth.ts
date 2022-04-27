const controller = require('../controller/auth.controller')
import {Router} from "express";

const router = Router()


router.post('/register', controller.register)
router.post('/login', controller.login)

export default router