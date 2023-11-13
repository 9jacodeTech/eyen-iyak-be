import Joi from 'joi';

export const programInputSchema = Joi.object({
  category: Joi.string()
    .lowercase()
    .valid('artist_development', 'cultural_regeneration'),
  writeUp: Joi.array().items(
    Joi.object({
      title: Joi.string().optional(),
      body: Joi.string().optional(),
      imageURL: Joi.string().required(),
    })
  ),
  subPrograms: Joi.array()
    .items(
      Joi.object({
        title: Joi.string().optional().allow(''),
        body: Joi.string().optional().allow(''),
        imageURL: Joi.array().items(Joi.string()).optional(),
        buttonLabel: Joi.string().optional(),
        registrationLink: Joi.string().optional(),
        donationLink: Joi.string().optional(),
      }).or('title', 'body', 'imageURL')
    )
    .optional(),
  coverImageURL: Joi.string().required(),
  background: Joi.string().lowercase().valid('white', 'gray').required(),
});
