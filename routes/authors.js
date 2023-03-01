import controller from "../controllers/authors/create.js"
import express from "express"
// import validator from "../middlewares/validator.js"
// import authorSchema from "../models/Author.js"

const router = express.Router()
const { create } = controller

router.post(
    "/",
    // validator(authorSchema),
    create
)

export default router
