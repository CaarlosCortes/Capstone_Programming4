import { User } from "../models/user.js";
import bcrypt from "bcrypt";


const getUserById = async (id) => {
    const user = await User.findById(id);

    if(!user) {
        throw new Error("User not found");
    }

    const userObject = user.toObject();
    delete userObject.password;
    
    return userObject;
};


const createUser = async (data) => {  
    const {username,password, email} = data;
    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = { username, password: hashedPassword, email };

    try {
       
        const newUser = new User(user);
        await newUser.save();

        const userObject = newUser.toObject();
        delete userObject.password;
        return userObject;

    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
    }
};


const updateEmailUserById = async (id, data) => {
    
    try {
        const user = await User.findByIdAndUpdate(
            id,
            {  email: data },
            { new: true}
        ).exec();

        if(!user) {
            throw new Error("User not found");
        }

        const userObject = user.toObject();
        delete userObject.password;

        return userObject;
    } catch (error) {
        throw new Error(`Error updating user email: ${error.message}`);
    }
};

const updateUsernameById = async (id, data) => {
    
    try {
        const user = await User.findByIdAndUpdate(
            id,
            { username: data },
            { new: true}
        ).exec();

        if(!user) {
            throw new Error("User not found");
        }

        const userObject = user.toObject();
        delete userObject.password;

        return userObject;
    } catch (error) {
        throw new Error(`Error updating username: ${error.message}`);
    }
};

const deleteUserById = async (id) => {
    try {
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            throw new Error("user not found");
        }
     } catch(error) {
        throw new Error(`Error deleting user by ID: ${error.message}`)
     }
    
    
};


const userService = {
    getUserById,
    createUser,
    updateEmailUserById,
    updateUsernameById,
    deleteUserById
};

export default userService;

