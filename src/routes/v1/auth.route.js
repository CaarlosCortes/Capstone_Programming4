import authController from "../../controllers/auth.controllers.js"
import express from "express";

const authRoutes = express.Router();

authRoutes
    .post("/login", authController.loginUser)


export { authRoutes };
