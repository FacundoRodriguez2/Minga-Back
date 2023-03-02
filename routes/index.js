import express from "express";
import userRouter from "./users.js";
import mangaRouter from "./mangas.js";
import chapterRouter from "./chapters.js";
import authors from "./authors.js";
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/mangas", mangaRouter);
router.use("/auth", userRouter);
router.use("/authors", authors);
router.use("/chapters", chapterRouter);

export default router;
