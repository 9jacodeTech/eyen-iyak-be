import Joi from 'joi';

export const aboutContentSchema = Joi.object({
  sections: Joi.array().items(
    Joi.object({
      title: Joi.string().optional(),
      subtitle: Joi.string().optional(),
      paragraph: Joi.string().optional(),
      align: Joi.string().optional(),
      imageURL: Joi.array().items(Joi.string()).default([]).optional(),
    }).or('title', 'subtitle', 'paragraph', 'imageURL')
  ),
});
