import mongoose from "mongoose";

export const initDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/capstone");
        console.log("Connected to database succesfully");
    }catch(error){
        console.log(error);
    }
};

