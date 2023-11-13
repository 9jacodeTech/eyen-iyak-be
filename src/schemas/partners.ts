import Joi from 'joi';

export const partnerSchema = Joi.object({
  category: Joi.string().lowercase().valid('main', 'art', 'other').required(),
  partnerWebAddress: Joi.string().optional(),
  subText: Joi.string().optional(),
  imageURL: Joi.string().required(),
});
