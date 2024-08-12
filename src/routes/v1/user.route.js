import userController from "../../controllers/user.controller.js";
import express from "express";
import userMiddleware from "../../middlewares/validations/user.validation.js";
import isAuthenticated from "../../middlewares/auth/isAuthtenticate.js";

const userRoutes = express.Router();

userRoutes
    .get("/:id",isAuthenticated, userController.getUserById)
    .post("/", userMiddleware.validateCreateUser ,userController.createUser)
    .put("/:id/email",isAuthenticated,  userMiddleware.validateUpdateEmailUser ,userController.updateEmailUserById)
    .put("/:id/username",isAuthenticated ,userMiddleware.validateUpdateUsername , userController.updateUsernameById)
    .delete("/:id",isAuthenticated ,userController.deleteUserById);

export { userRoutes };  