import Joi from 'joi';

export const teamMembersSchema = Joi.object({
  department: Joi.string()
    .lowercase()
    .valid('executive', 'board_of_directors', 'council_governors', 'operations')
    .required(),
  imageURL: Joi.string().required(),
  name: Joi.string().required(),
  role: Joi.string().required(),
});
