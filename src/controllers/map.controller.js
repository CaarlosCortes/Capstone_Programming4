import mapService from "../services/map.service.js";

const getMaps = async (req, res) => {
    const { userid } = req.params;
    console.log("userid ->" + userid);
    try {
        const maps = await mapService.getMaps(userid);
        res.status(200).json(maps);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getMapById = async (req, res) => {
    const { userid, mapid } = req.params;

    try {
        const map  = await mapService.getMapById(userid, mapid);
        res.status(200).json(map);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createMap = async (req, res) => {
    const { userid } = req.params;
    const data = req.body;

    try{
        const addMapToUser = await mapService.createMap(userid,data);
        res.status(201).json(addMapToUser);
    }catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateNameMapById = async (req, res) => {
    const { userid, mapid } = req.params;
    const { name } = req.body;

    try {
        const newMapName = await mapService.updateNameMapById(userid,mapid,name);
        res.status(200).json(newMapName);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const updateDimensionsMapById = async (req, res) => {
    const { userid, mapid } = req.params;
    const { dimensions } = req.body;

    try {
        const newDimensions = await mapService.updateDimensionsMapById(userid,mapid,dimensions);
        res.status(200).json(newDimensions);
    }  catch {
        res.status(400).json({ message: error.message });
    }
}


const deleteMapById = async (req, res) => {
    const { userid, mapid } = req.params;

    try{
        const deleteMap = await mapService.deleteMapById(userid, mapid);
        res.status(200).json(deleteMap);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const mapController = {
    getMaps,
    getMapById,
    createMap,
    updateNameMapById,
    updateDimensionsMapById,
    deleteMapById
}

export default mapController;