import mongoose from "mongoose";

const Schema = mongoose.Schema;

const waypointSchema = {
    position: {
        x : { type: Number, require :  true},
        y : { type: Number, require : true}
    },
    name : { type: String, require : true}
}

export { waypointSchema };