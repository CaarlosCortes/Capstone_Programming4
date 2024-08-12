import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pointSchema = new Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
});


export { pointSchema };
