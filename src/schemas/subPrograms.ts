import Joi from 'joi';

export const subProgramsSchema = Joi.object({
  category: Joi.string()
    .lowercase()
    .valid('artist_development', 'cultural_regeneration').required(),
  description: Joi.string().required(),
  buttonLabel: Joi.string().optional(),
  registrationLink: Joi.string().optional(),
  donateionLink: Joi.string().optional(),
  imageURL: Joi.string().required(),
});
