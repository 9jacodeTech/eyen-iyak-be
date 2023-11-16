import Joi from 'joi';

export const programInputSchema = Joi.object({
  category: Joi.string()
    .lowercase()
    .valid('artist_development', 'cultural_regeneration'),
  writeUp: Joi.array().items(
    Joi.object({
      title: Joi.string().optional(),
      body: Joi.string().optional(),
      imageURL: Joi.string().optional(),
    })
  ),
});
