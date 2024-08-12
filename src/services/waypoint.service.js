import { User } from "../models/user.js"

const createWaypoint = async (userid, mapid, data) => {
    try {
        const user = await User.findById(userid);

        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        map.waypoints.push(data);

        await user.save();

        return map.waypoints;
    } catch (error) {
        throw new Error(`Error adding waypoint: ${error.message}`);
    }
};

const getWaypointsByMapId = async (userid, mapid) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        return map.waypoints;
    } catch (error) {
        throw new Error(`Error fetching waypoints: ${error.message}`);
    }
};

const getWaypointById = async (userid, mapid, waypointid) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const waypoint = map.waypoints.id(waypointid);
        if (!waypoint) {
            throw new Error('Waypoint not found');
        }

        return waypoint;
    } catch (error) {
        throw new Error(`Error fetching obstacle: ${error.message}`);
    }
};


const deleteWaypointById = async(userid, mapid, waypointid) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        map.waypoints.pull(waypointid);
        
        await user.save();

    } catch (error) {
        throw new Error(`Error deleting obstacle: ${error.message}`);
    } 
}

const updateNameWaypointById = async (userid, mapid, waypointid, data) =>{
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const waypoint = map.waypoints.id(waypointid);
        if (!waypoint) {
            throw new Error('Waypoint not found');
        }

        waypoint.name = data;

        await user.save();

        return waypoint;
    } catch (error) {
        throw new Error(`Error updating name waypoint: ${error.message}`);
    }
};

const updatePositionWaypointById = async (userid, mapid, waypointid, data) =>{
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const waypoint = map.waypoints.id(waypointid);
        if (!waypoint) {
            throw new Error('Waypoint not found');
        }

        waypoint.position = data;

        await user.save();

        return waypoint;
    } catch (error) {
        throw new Error(`Error updating position waypoint: ${error.message}`);
    }
};


const waypointService = {
    createWaypoint,
    getWaypointsByMapId,
    getWaypointById,
    deleteWaypointById,
    updateNameWaypointById,
    updatePositionWaypointById
};

export default waypointService;