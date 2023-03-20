import Joi from "joi-oid"

let schema = Joi.object({
    title: Joi
        .string()
        .min(3)
        .max(30)
        .messages({
            "string.min": "The title must be at least 4 characters long",
            "string.max": "The title must have a maximum of 30 characters",
      }),
    cover_photo: Joi
        .string()
        .uri(),
    description: Joi
        .string()
        .min(20)
        .max(2000)
        .messages({
            "string.min": "The Description must be at least 20 characters long",
            "string.max": "The description must have a maximum of 100 characters",
      }),
    category_id: Joi
        .objectId(),
})

export default schema
