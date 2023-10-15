import Joi from 'joi';

export const heroSectionInputSchema = Joi.object({
  page: Joi.string()
    .lowercase()
    .valid('home', 'programs', 'projects', 'support_us')
    .required(),
  header: Joi.string().required(),
  subHeader: Joi.string().required(),
  imageURL: Joi.array().items(Joi.string()).required(),
});
