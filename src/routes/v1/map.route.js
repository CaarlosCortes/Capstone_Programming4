import mapController from "../../controllers/map.controller.js";
import express from "express";
import isAuthenticated from "../../middlewares/auth/isAuthtenticate.js";

const mapRoutes = express.Router();

mapRoutes
    .get("/:userid",isAuthenticated, mapController.getMaps)
    .get("/:userid/id/:mapid",isAuthenticated, mapController.getMapById)
    .post("/:userid",isAuthenticated,  mapController.createMap)
    .put("/:userid/id/:mapid/name",isAuthenticated, mapController.updateNameMapById)
    .put("/:userid/id/:mapid/dimensions",isAuthenticated, mapController.updateDimensionsMapById)
    .delete("/:userid/id/:mapid",isAuthenticated, mapController.deleteMapById)

export { mapRoutes };