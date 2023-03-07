import joi from "joi-oid"

let schema = joi.object({
    tittle: joi.string().required().min(6).max(40).message({
        "any.required": "Name is a required field.",
        "string.empty": "Name cannot be an empty field.",
        "string.min": "Name must have a minimum length of {#limit}",
        "string.max": "Name must have a maximum length of {#limit}",
        "string.base": "Name must be a type of 'text'",
    }),
    category: joi.string().required() ({

    }),
    description: joi.string().required().min(20).max(100).message({
        "any.required": "Name is a required field.",
        "string.empty": "Name cannot be an empty field.",
        "string.min": "Name must have a minimum length of {#limit}",
        "string.max": "Name must have a maximum length of {#limit}",
        "string.base": "Name must be a type of 'text'",
    }),

})