import Joi from 'joi';

export const searchInputSchema = Joi.object({
  searchTerm: Joi.string().required(),
  category: Joi.string()
    .lowercase()
    .valid('everywhere', 'news', 'events', 'projects', 'programs')
    .required(),
});
