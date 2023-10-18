import Joi from 'joi';

export const projectInputSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.date().required(),
  description: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().optional(),
        body: Joi.string().optional(),
        imageUrl: Joi.array().items(Joi.string()).optional(),
      }).or('title', 'body', 'imageUrl')
    )
    .min(1)
    .required(),
  status: Joi.string()
    .lowercase()
    .valid('current', 'upcoming', 'permanent', 'archive'),
  coverImageUrl: Joi.string().required(),
  setAsHero: Joi.boolean().default(false),
});
