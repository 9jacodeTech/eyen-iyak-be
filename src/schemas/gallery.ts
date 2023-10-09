import Joi from 'joi';

export const galleryInputSchema = Joi.object({
  header: Joi.string().required(),
  subHeader: Joi.string().required(),
  imageURL: Joi.string().required(),
});
