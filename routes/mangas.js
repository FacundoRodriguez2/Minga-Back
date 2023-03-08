import express from "express";
import createcontroller from "../controllers/manga/create.js"
import showcontroller from "../controllers/categories/show.js"
import existsTittle from "../middlewares/exists_tittle.js"
import passport from "../middlewares/passport.js";
import get_mangas from "../controllers/manga/get_mangas_from_author.js"

let router = express.Router();
let {create} = createcontroller
let {show}= showcontroller
const { get_mangas_from_author } = get_mangas

router.get("/", show)
router.post("/", passport.authenticate('jwt', { session: false }), existsTittle ,create)
router.get(
    "/authors/:author_id", 
    passport.authenticate("jwt", { session: false }), 
    get_mangas_from_author 
    )




export default router;
