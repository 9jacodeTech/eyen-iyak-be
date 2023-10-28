import Joi from 'joi';

export const programInputSchema = Joi.object({
  program: Joi.string()
    .lowercase()
    .valid('artist development', 'cultural regeneration', 'education'),
  writeUp: Joi.array().items(
    Joi.object({
      title: Joi.string().optional(),
      body: Joi.string().optional(),
      imageURL: Joi.array().items(Joi.string()).optional(),
    })
  ),
  sections: Joi.array()
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
    .min(1)
    .optional(),
  coverImageURL: Joi.string().required(),
});
