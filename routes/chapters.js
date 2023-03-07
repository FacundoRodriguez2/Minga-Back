import express from 'express'
import createController from '../controllers/chapters/create.js';
import Schema from '../schemas/chapters/chapters.js'
import validator from '../middlewares/validator.js';
import nextOrder from '../middlewares/chapters/next_order.js';
import addFrontPhoto from '../middlewares/chapters/add_front_photo.js';
import existsOrder from '../middlewares/chapters/exists_order.js';
import passport from '../middlewares/passport.js';
let router = express.Router();



const {create}=createController


router.post('/',passport.authenticate('jwt',{session:false}),validator(Schema),existsOrder,nextOrder,addFrontPhoto,create )


export default router
