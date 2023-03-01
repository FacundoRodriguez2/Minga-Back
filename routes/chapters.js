import express from 'express'
import Chapter from '../models/Chapter.js'
import controller from '../controllers/chapters/create.js';
let router = express.Router();

const {create}=controller


router.get('/', function (req, res, next) {
    res.send('chapters here');
});

router.post('/chapters',create)


export default router
