import Joi from 'joi';

export const aboutPageInputSchema = Joi.object({
  header: Joi.string().required(),
  subHeader: Joi.string().required(),
  imageURL: Joi.array().items(Joi.string()).required(),
});
