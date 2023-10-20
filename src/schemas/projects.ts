import Joi from 'joi';

export const projectInputSchema = Joi.object({
  title: Joi.string().required(),
  date: Joi.date().required(),
  sections: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().optional().allow(''),
        body: Joi.string().optional().allow(''),
        imageURL: Joi.array().items(Joi.string()).optional(),
      }).or('title', 'body', 'imageURL')
    )
    .min(1)
    .required(),
  status: Joi.string()
    .lowercase()
    .valid('current', 'upcoming', 'permanent', 'archive'),
  coverImageURL: Joi.string().required(),
});
