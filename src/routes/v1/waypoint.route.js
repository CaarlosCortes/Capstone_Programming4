import waypointController from "../../controllers/waypoint.controller.js";
import express from "express";
import isAuthenticated from "../../middlewares/auth/isAuthtenticate.js";

const waypointRoutes = express.Router();

waypointRoutes
    .post("/:userid/id/:mapid",isAuthenticated, waypointController.createWaypoint)
    .get("/:userid/id/:mapid",isAuthenticated, waypointController.getWaypointsByMapId)
    .get("/:userid/id/:mapid/mapid/:waypointid",isAuthenticated, waypointController.getWaypointById)
    .delete("/:userid/id/:mapid/mapid/:waypointid",isAuthenticated, waypointController.deleteWaypointById)
    .put("/:userid/id/:mapid/mapid/:waypointid/name",isAuthenticated, waypointController.updateNameWaypointById)
    .put("/:userid/id/:mapid/mapid/:waypointid/position",isAuthenticated, waypointController.updatePositionWaypointById)    
export { waypointRoutes };    