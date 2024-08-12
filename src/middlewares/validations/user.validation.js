import { check, validationResult } from "express-validator";
import errorHandler from "../../utils/errorHandler.js";

const errorValidatorFunctor = (validations) => ({
  map: (fn) => errorValidatorFunctor([...validations, fn]),
  get: () => [...validations, errorHandler],
});

const validateCreateUser = errorValidatorFunctor([
    check("username").exists().isString().trim().notEmpty(),
    check("password").exists().isString().trim().notEmpty(),
    check("email").exists().trim().notEmpty().isEmail(),
]).get();


const validateUpdateEmailUser = errorValidatorFunctor([

  check("email").exists().trim().notEmpty().isEmail(),

]).get();

const validateUpdateUsername = errorValidatorFunctor([

  check("username").exists().isString().trim().notEmpty(),
]).get();

const userMiddleware = {
    validateCreateUser,
    validateUpdateEmailUser,
    validateUpdateUsername
};

export default userMiddleware;



