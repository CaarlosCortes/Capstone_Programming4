import routeController from "../../controllers/route.controller.js";
import routeMiddleware from "../../middlewares/validations/route.validation.js";
import express from "express";
import isAuthenticated from "../../middlewares/auth/isAuthtenticate.js";

const routeRoutes = express.Router();

routeRoutes
    .post("/:userid/id/:mapid", isAuthenticated ,routeController.creteRoute)
    .get("/:userid/id/:mapid", isAuthenticated, routeController.getRoutesByMap)
    .get("/:userid/id/:mapid/mapid/:routeid",isAuthenticated, routeController.getRouteById)
    .delete("/:userid/id/:mapid/mapid/:routeid",isAuthenticated, routeController.deleteRouteById)
    .put("/:userid/id/:mapid/mapid/:routeid/start",isAuthenticated, routeController.updateStartRouteById)
    .put("/:userid/id/:mapid/mapid/:routeid/end",isAuthenticated, routeController.updateEndRouteById)
    .put("/:userid/id/:mapid/mapid/:routeid/distance",isAuthenticated, routeController.updateDistanceRouteById)
    .post("/:userid/id/:mapid/mapid/:routeid/optimal-path",isAuthenticated, routeController.calculateOptimalPath)
export { routeRoutes };