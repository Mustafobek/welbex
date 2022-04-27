import {Router} from "express";
const router = Router()

router.get('/', (_, res) => res.render('main'))
router.get('/register', (_, res) => res.render('register'))
router.get('/login', (_, res) => res.render('login'))
router.get('/add-post', (_, res) => res.render('add-post'))
router.get('/post/:id', (_, res) => res.render('post'))
router.get('/my-posts', (_, res) => res.render('my-posts'))

export default router