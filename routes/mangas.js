import express from "express";
let router = express.Router();
import Manga from "../models/Manga.js";

router.get("/", async (req, res) => {
  return res.status(200).send("Pagina de mangas");
});
router.post("/", async (req, res) => {
  try {
    let manga = await Manga.create(req.body);
    req.body.author_id = "63fe8112f09373806fd89fe5";
    return res.status(200).json({
      response: "created",
      manga: req.body,
    });
  } catch (error) {
    return res.status(200).json({
      response: "error.message",
    });
  }
});

export default router;
