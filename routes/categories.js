import express from 'express'
import showcontroller from "../controllers/categories/show.js"


const { all } = showcontroller

let router = express.Router()

router.get("/", all)

export default router
