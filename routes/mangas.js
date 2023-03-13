import express from "express";
import createcontroller from "../controllers/manga/create.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/mangas/mangas.js"
import existsTitle from "../middlewares/exists_title.js"
import passport from "../middlewares/passport.js";
import get_mangas from "../controllers/manga/get_mangas_from_author.js"
import get_manga from '../controllers/manga/get_one.js'
import getMangas from '../controllers/manga/get_mangas.js'

let router = express.Router();
let {create} = createcontroller
const {get_one}=get_manga
const { get_mangas_from_author } = get_mangas
const { read } = getMangas


router.post("/", passport.authenticate('jwt', { session: false }), validator(schema), existsTitle ,create)
router.get(
    "/authors/:author_id", 
    passport.authenticate("jwt", { session: false }), 
    get_mangas_from_author 
    )
    router.get('/:id',passport.authenticate("jwt", { session: false }),get_one)
router.get('/', passport.authenticate('jwt', { session:false }), read)


export default router;
