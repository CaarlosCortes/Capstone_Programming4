import { User } from "../models/user.js";


const getMaps = async (userid) => {
    try {
        const user = await User.findById(userid);
        if(!user) {
            throw new Error("User not found");
        }
        return user.maps;
    } catch (error) {
        throw new Error(`Error retrieving maps for user: ${error.message}`);
    }
}

const getMapById = async (userid, mapid) => {
    try {
        const user = await User.findById(userid);
        if(!user) {
            throw new Error("User not found");
        }

        const map = user.maps.id(mapid);
        if(!map) {
            throw new Error("Map not found");
        }
        
        return map;
    } catch (error) {
        throw new Error(`Error retrieving map: ${error.message}`);
    }
};

const createMap = async (userid, data) => {
    try {
        const user = await User.findById(userid);
        if(!user){
             throw new Error("User not found");
        }
        user.maps.push(data);

        await user.save();
        return user.maps;
    }catch (error) {
        throw new Error(`Error adding map to user: ${error.message}`);
    }
};

const updateNameMapById = async (userid, mapid, data) => {
    try {
        const user = await User.findById(userid);
        if(!user) {
            throw new Error("User not found");
        }
        const map = user.maps.id(mapid);
        if(!map) {
            throw new Error("Map not found");
        }
        map.name = data;

        await user.save();

        return map;
    } catch (error) {
        throw new Error(`Error updating map name: ${error.message}`);
    }
};

const updateDimensionsMapById = async (userid, mapid, data) => {
    try {
        const user = await User.findById(userid);
        if(!user) {
            throw new Error("User not found");
        }
        const map = user.maps.id(mapid);
        if(!map) {
           throw new Error("Map not found");
        }

        map.dimensions = data;

        await user.save();

        return map;
    } catch (error) {
        throw new Error(`Error updating map dimensions: ${error.message}`);
    }
}; 


const deleteMapById = async (userid, id) => {
    try{
        const user = await User.findById(userid);
        if(!user){
             throw new Error("User not found");
        }

        //Find the map
        const mapIndex = user.maps.findIndex(map => map._id.toString() === id);
        if(mapIndex === -1 ){
            throw new Error("Map not found");
        }

        //Delete the map of the user
        user.maps.splice(mapIndex, 1);

        // save the updated user
        await user.save()
        return user;
    } catch (error) {
        throw new Error(`Error removing map from user: ${error.message}`);
    }
};

const mapService = {
    getMaps,
    getMapById,
    createMap,
    updateNameMapById,
    updateDimensionsMapById,
    deleteMapById
};

export default mapService;