import Joi from 'joi';

export const newsInputSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  author: Joi.string().required(),
  date: Joi.date().required(),
  imageURL: Joi.string().required(),
});
