import Joi from 'joi';

export const partnerSchema = Joi.object({
  category: Joi.string().lowercase().valid('main', 'art', 'other').required(),
  partnerURL: Joi.string().optional(),
  subText: Joi.string().optional(),
  imageURL: Joi.string().required(),
});
