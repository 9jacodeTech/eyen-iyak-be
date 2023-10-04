import Joi from 'joi';


export const projectInputSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.date().required(),
  description: Joi.string().required(),
  status: Joi.string().valid('current', 'upcoming', 'Permanent', 'Archive'),
  imageURL: Joi.string().required(),
  setAsHero: Joi.boolean().default(false),
});
