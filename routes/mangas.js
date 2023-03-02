import express from "express";
import createcontroller from "../controllers/manga/create.js"
import passport from "../middlewares/passport.js";
let router = express.Router();
let {create} = createcontroller

router.get("/", async (req, res) => {
  return res.status(200).send("Pagina de mangas");
});

router.post("/",passport.authenticate('jwt', { session: false }) ,create) 

export default router;
