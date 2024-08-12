import mongoose from "mongoose";
import { pointSchema } from "./point.js";

const Schema = mongoose.Schema;

const routeSchema = {
    start: {
        x : { type: Number, require :  true},
        y : { type: Number, require : true}
    },
    end: {
        x : { type: Number, require :  true},
        y : { type: Number, require : true}
    },
    distance: { type: Number, require : true},
    optimalPath: [pointSchema]
}

export {routeSchema};