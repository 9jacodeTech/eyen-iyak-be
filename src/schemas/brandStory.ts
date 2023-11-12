import Joi from 'joi';

export const brandStorySchema = Joi.object({
  title: Joi.string().required(),
  subtTitle: Joi.string().optional(),
  content: Joi.string().optional(),
  imageURL: Joi.string().required(),
});
