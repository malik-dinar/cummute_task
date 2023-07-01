import Joi from "@hapi/joi";

export const registerSChema = Joi.object({
  fname: Joi.string().min(3).required(),
  lname: Joi.string().min(3).required(),
  email: Joi.string().min(3).required(),
  password: Joi.string().min(3).required(),
});

export const loginSChema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});
