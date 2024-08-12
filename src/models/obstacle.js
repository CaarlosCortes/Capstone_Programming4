import mongoose from "mongoose";

const Schema = mongoose.Schema;

const obstacleSchema = new Schema({
    position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true }
    },
});

export { obstacleSchema };