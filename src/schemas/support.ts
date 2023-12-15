import Joi from 'joi';

export const supportSchema = Joi.object({
  name: Joi.string().lowercase().required(),
  description: Joi.string().required(),
  registrationLink: Joi.string().optional().allow(''),
  imageURL: Joi.string().required(),
});
