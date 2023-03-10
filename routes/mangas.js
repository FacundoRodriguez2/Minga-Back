import express from "express";
import createcontroller from "../controllers/manga/create.js"
import showcontroller from "../controllers/categories/show.js"
import existsTittle from "../middlewares/exists_tittle.js"
import passport from "../middlewares/passport.js";

let router = express.Router();
let {create} = createcontroller
let {show}= showcontroller

router.get("/", show)
router.post("/", passport.authenticate('jwt', { session: false }), existsTittle ,create) 



export default router;
