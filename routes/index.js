import express from 'express'
import authors from "./authors.js"
import userRouter from './users.js'
import chapterRouter from './chapters.js'
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

router.use('/auth',userRouter)
router.use("/authors", authors)
router.use('/chapters',chapterRouter)

export default router