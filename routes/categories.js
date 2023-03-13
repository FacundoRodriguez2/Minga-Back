import express from 'express'
import showcontroller from "../controllers/categories/show.js"

const { show } = showcontroller

let router = express.Router()

router.get("/", show)

export default router
