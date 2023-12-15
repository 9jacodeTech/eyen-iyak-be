import Joi from 'joi';

export const supportOfferSchema = Joi.object({
  name: Joi.string().lowercase().required(),
  email: Joi.string().required(),
  supportType: Joi.string().required(),
});
