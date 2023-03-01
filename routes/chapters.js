import express from 'express'
import Chapter from '../models/Chapter.js'

let router = express.Router();

router.get('/', function (req, res, next) {
    res.send('chapters here');
});

router.post('/', async (req, res) => {
    try { 
  
        let chapter = await Chapter.create(req.body)
        return res.status(201).json({
            success: true,
            chapter: chapter,
            id: chapter._id
    
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: 'fail to create',
            body: req.body
        })
    }
})

export default router
