import mongoose from "mongoose";
import { mapSchema } from "../models/map.js";

const Schema = mongoose.Schema;

const userSchema = {
    username : { type : String, required :  true , unique : true},
    password : { type : String, required :  true },
    email : { type : String, required :  true, unique : true},
    maps : [mapSchema] 
   
}

export const User = mongoose.model('User', userSchema);


