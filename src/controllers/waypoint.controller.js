import waypointService from "../services/waypoint.service.js";

const createWaypoint = async (req, res) => {

    const { userid, mapid } = req.params;
    const  waypoint  = req.body;

    try {
        const newWaypoint = await waypointService.createWaypoint(userid, mapid, waypoint);
        res.status(201).json(newWaypoint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};    

const getWaypointsByMapId = async (req, res) => {
    const { userid, mapid } = req.params;

    try {
        const waypoints = await waypointService.getWaypointsByMapId(userid, mapid);
        res.status(200).json(waypoints);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getWaypointById = async (req, res) => {
    const { userid, mapid, waypointid } =  req.params;

    try {
        const waypoint = await waypointService.getWaypointById(userid, mapid, waypointid);
        res.status(200).json(waypoint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteWaypointById = async (req, res) => {
    const { userid, mapid, waypointid } =  req.params;

    try {
        await waypointService.deleteWaypointById(userid, mapid, waypointid);
        res.status(200).end()
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateNameWaypointById = async (req, res) => {
    const { userid, mapid, waypointid } =  req.params;
    const { name } = req.body;

    try {
        const updatedWaypoint = await waypointService.updateNameWaypointById(userid, mapid, waypointid, name);
        res.status(200).json(updatedWaypoint)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updatePositionWaypointById = async (req, res) => {
    const { userid, mapid, waypointid } =  req.params;
    const { position } = req.body;

    try {
        const updatedWaypoint = await waypointService.updatePositionWaypointById(userid, mapid, waypointid, position);
        res.status(200).json(updatedWaypoint)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

    



const waypointController = {
    createWaypoint,
    getWaypointsByMapId,
    getWaypointById,
    deleteWaypointById,
    updateNameWaypointById,
    updatePositionWaypointById
};

export default waypointController;