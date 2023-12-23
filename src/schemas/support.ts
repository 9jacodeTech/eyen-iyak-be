import Joi from 'joi';

export const supportSchema = Joi.object({
  name: Joi.string().lowercase().required(),
  description: Joi.string().required(),
  btnHref: Joi.string().required(),
  btnLabel: Joi.string().required(),
  imageURL: Joi.string().required(),
});
