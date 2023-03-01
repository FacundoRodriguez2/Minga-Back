import express from 'express'
import authors from "./authors.js"
import userRouter from './users.js'
let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

router.use('/users',userRouter)
router.use("/authors", authors)


export default router