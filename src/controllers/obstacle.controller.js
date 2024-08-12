import obstacleService from "../services/obstacle.service.js";

const createObstacle = async (req, res) => {

    const { userid, mapid } = req.params;
    const obstacle = req.body;

    try {
        const newObstacle = await obstacleService.createObstacle(userid, mapid, obstacle);
        res.status(201).json(newObstacle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getObstaclesByMapId = async (req, res) => {
    const { userid, mapid } = req.params;

    try {
        const newObstacle = await obstacleService.getObstaclesByMapId(userid, mapid);
        res.status(200).json(newObstacle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getObstaclesById = async (req, res) => {
    const { userid, mapid, obstacleid } =  req.params;

    try {
        const obstacle = await obstacleService.getObstaclesById(userid, mapid, obstacleid);
        res.status(200).json(obstacle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteObstacleById = async (req, res) => {
    const { userid, mapid, obstacleid } =  req.params;

    try {
        await obstacleService.deleteObstacleById(userid, mapid, obstacleid);
        res.status(200).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateObstacle = async (req, res) => {
    const { userid, mapid, obstacleid } =  req.params;
    const obstacle = req.body;
    try {
        const newObstacle = await obstacleService.updateObstacle(userid, mapid, obstacleid, obstacle);
        res.status(200).json(newObstacle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const obstacleController = {
    createObstacle,
    getObstaclesByMapId,
    getObstaclesById,
    deleteObstacleById,
    updateObstacle
};

export default obstacleController;