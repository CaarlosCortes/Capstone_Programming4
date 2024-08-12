import mongoose from "mongoose";
import { routeSchema } from "./route.js";
import { obstacleSchema } from "./obstacle.js";
import { waypointSchema } from "./waypoint.js"

const Schema = mongoose.Schema;

const mapSchema = new Schema({
    name: { type: String, required: true},
    dimensions: {
        width: { type: Number, required: true },
        height: { type: Number, required: true }
    },
    routes : [routeSchema],
    obstacles : [obstacleSchema],
    waypoints: [waypointSchema]
});


export  { mapSchema };