import Joi from 'joi';


export const programInputSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  buttonLabel: Joi.string().required(),
  registrationLink: Joi.string().required(),
  donationLink: Joi.string().required(),
  imageURL: Joi.string().required(),
});
