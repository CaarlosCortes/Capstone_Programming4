import obstacleController from "../../controllers/obstacle.controller.js";
import express from "express";
import isAuthenticated from "../../middlewares/auth/isAuthtenticate.js";

const obstacleRoutes = express.Router();

obstacleRoutes
    .post("/:userid/id/:mapid",isAuthenticated,  obstacleController.createObstacle)
    .get("/:userid/id/:mapid",isAuthenticated, obstacleController.getObstaclesByMapId)
    .get("/:userid/id/:mapid/mapid/:obstacleid",isAuthenticated, obstacleController.getObstaclesById)
    .delete("/:userid/id/:mapid/mapid/:obstacleid",isAuthenticated, obstacleController.deleteObstacleById)
    .put("/:userid/id/:mapid/mapid/:obstacleid", isAuthenticated, obstacleController.updateObstacle)

export { obstacleRoutes };