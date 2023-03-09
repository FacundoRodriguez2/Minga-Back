import express from "express";
import createcontroller from "../controllers/manga/create.js"
import showcontroller from "../controllers/categories/show.js"
import validator from "../middlewares/validator.js";
import schema from "../schemas/mangas/mangas.js"
import existsTitle from "../middlewares/exists_title.js"
import passport from "../middlewares/passport.js";

let router = express.Router();
let {create} = createcontroller
let {show}= showcontroller

router.get("/", show)
router.post("/", validator(schema), existsTitle ,create) 



export default router;
