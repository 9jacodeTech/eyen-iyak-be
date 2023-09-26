import Joi from "joi";

export const heroSectionInputSchema = Joi.object({
    header: Joi.string().required(),
    subHeader: Joi.string().required(),
    backGroundImageURL: Joi.string().required(),
})

