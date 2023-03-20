import express from "express";
import createcontroller from "../controllers/manga/create.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/mangas/mangas.js"
import existsTitle from "../middlewares/exists_title.js"
import passport from "../middlewares/passport.js";
import get_mangas from "../controllers/manga/get_mangas_from_author.js"
import get_manga from '../controllers/manga/get_one.js'
import getMangas from '../controllers/manga/get_mangas.js'
import get_data from "../controllers/manga/get_me.js"
import finds_id from "../middlewares/finds_id.js"

let router = express.Router();
let {create} = createcontroller
const {get_one}=get_manga
const { get_mangas_from_author } = get_mangas
const { read } = getMangas
const { get_me } = get_data


router.post("/", passport.authenticate('jwt', { session: false }), validator(schema), existsTitle ,create)

router.get( "/authors/:author_id", passport.authenticate("jwt", { session: false }), get_mangas_from_author )

router.get("/me", passport.authenticate('jwt', { session: false }), finds_id, get_me)
    
router.get('/:id',passport.authenticate("jwt", { session: false }), get_one)

router.get('/', passport.authenticate('jwt', { session: false }), read)


export default router;
