import { User } from "../models/user.js"

const createObstacle = async (userid, mapid, data) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        map.obstacles.push(data);
        await user.save();

        return map.obstacles;
    } catch (error) {
        throw new Error(`Error adding obstacle: ${error.message}`);
    }
};

const getObstaclesByMapId = async (userid, mapid) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        return map.obstacles;
    } catch (error) {
        throw new Error(`Error fetching obstacles: ${error.message}`);
    }
};

const getObstaclesById = async (userid, mapid, obstacleid) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const obstacle = map.obstacles.id(obstacleid);
        if (!obstacle) {
            throw new Error('Obstacle not found');
        }

        return obstacle;
    } catch (error) {
        throw new Error(`Error fetching obstacle: ${error.message}`);
    }
}

const deleteObstacleById = async (userid, mapid, obstacleid) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        map.obstacles.pull(obstacleid);
        
        await user.save();

    } catch (error) {
        throw new Error(`Error deleting obstacle: ${error.message}`);
    }
};

const updateObstacle = async (userid, mapid, obstacleid, data) => {
    try {
        const user = await User.findById(userid);
        if (!user) {
            throw new Error('User not found');
        }

        const map = user.maps.id(mapid);
        if (!map) {
            throw new Error('Map not found');
        }

        const obstacle = map.obstacles.id(obstacleid);
        if (!obstacle) {
            throw new Error('Obstacle not found');
        }

        obstacle.position = data;

        await user.save();

        return obstacle;

    }catch (error) {
        throw new Error(`Error updated obstacle: ${error.message}`);
    }
};


const obstacleService = {
    createObstacle,
    getObstaclesByMapId,
    getObstaclesById,
    deleteObstacleById,
    updateObstacle
};

export default obstacleService;