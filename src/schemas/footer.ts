import Joi from 'joi';

export const footerSchema = Joi.object({
  officeAddress: Joi.string().allow('').optional(),
  emailAddress: Joi.string().allow('').optional(),
  facebook: Joi.string().allow('').optional(),
  instagram: Joi.string().allow('').optional(),
  linkedIn: Joi.string().allow('').optional(),
  twitter: Joi.string().allow('').optional(),
});
