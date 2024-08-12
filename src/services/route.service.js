import { User } from "../models/user.js";

const createRoute = async(userid, mapid, data) => {
    try {
        const user = await User.findById(userid);
        if(!user) {
            throw new Error ("User not found");
        }

        const map = user.maps.id(mapid);
        if(!map) {
            throw new Error ("Map not found");
        }
        map.routes.push(data);
        await user.save();

        return map;
        
    } catch (error) {
        throw new Error(`Error adding route to map: ${error.message}`);
    }
};

const getRoutesByMap = async (userid, mapid) => {
    try {
        const user = await User.findById(userid);
        if(!user) {
            throw new Error ("User not found");
        }

        const map = user.maps.id(mapid);
        if(!map) {
            throw new Error ("Map not found");
        }

        return map.routes;
    }catch (error) {
        throw new Error(`Error getting routes: ${error.message}`);
    }
};

const getRouteById = async (userid, mapid, routeid) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const route = map.routes.id(routeid);
        if (!route) {
            throw new Error('Route not found');
        }

        return route;
    } catch (error) {
        throw new Error(`Error getting route: ${error.message}`);
    }
};

const deleteRouteById = async (userid, mapid, routeid) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const route = map.routes.id(routeid);
        if (!route) {
            throw new Error('Route not found');
        }

        map.routes.pull(routeid);

        await user.save();

        return route; 
    } catch (error) {
        throw new Error(`Error deleting route: ${error.message}`);
    }
}

const updateStartRouteById = async (userid, mapid, routeid, data) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const route = map.routes.id(routeid);
        if (!route) {
            throw new Error('Route not found');
        }

        route.start = data;

        await user.save();

        return route; 
    } catch (error) {
        throw new Error(`Error updating route start point: ${error.message}`);
    }
}

const updateEndRouteById = async (userid, mapid, routeid, data) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const route = map.routes.id(routeid);
        if (!route) {
            throw new Error('Route not found');
        }

        route.end = data;

        await user.save();

        return route; 
    } catch (error) {
        throw new Error(`Error updating route end point: ${error.message}`);
    }
}

const updateDistanceRouteById = async (userid, mapid, routeid, data) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const route = map.routes.id(routeid);
        if (!route) {
            throw new Error('Route not found');
        }

        route.distance = data;

        await user.save();

        return route; 
    } catch (error) {
        throw new Error(`Error updating distance route: ${error.message}`);
    }
}



const routeService = {
    createRoute,
    getRoutesByMap,
    getRouteById,
    deleteRouteById,
    updateStartRouteById,
    updateEndRouteById,
    updateDistanceRouteById
};

export default routeService;