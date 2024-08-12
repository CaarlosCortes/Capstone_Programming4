import { User } from "../../models/user.js"

const validateRoute = async (req, res, next) => {
    const { userid, mapid } = req.params;
    const route = req.body;

    try {
        const user = await User.findById(userid)

        if(!user) {
           return res.status(404).json({ message: 'User not found' });
        } 

        const map = user.maps.id(mapid);
        if (!map) {
            return res.status(404).json({ message: 'Map not found' });
        }



        const { start, end } = route;
        if (
            start.x < 0 || start.x > map.dimensions.width ||
            start.y < 0 || start.y > map.dimensions.height ||
            end.x < 0 || end.x > map.dimensions.width ||
            end.y < 0 || end.y > map.dimensions.height
        ) {
            return res.status(400).json({ message: 'Route points are out of map dimensions' });
        }

        req.map = map;
        req.route = route;

        next();
    }catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const routeMiddleware = {
    validateRoute
};

export default routeMiddleware;