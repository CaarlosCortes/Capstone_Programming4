import {aStar} from "../utils/aStar.js"
import  routeService  from "../services/route.service.js";
import { User } from "../models/user.js";


const creteRoute = async (req, res) => {
    const { userid, mapid } = req.params;
    const data = req.body;

    try {
        const route = await routeService.createRoute(userid,mapid,data);
        res.status(201).json(route); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getRoutesByMap = async (req, res) => {
    const { userid, mapid } = req.params;
    try {
        const routes = await routeService.getRoutesByMap(userid, mapid);
        res.status(200).json(routes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const getRouteById = async (req, res) => {
    const { userid, mapid, routeid } =  req.params;

    try {
        const route = await routeService.getRouteById(userid, mapid, routeid);
        res.status(200).json(route);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteRouteById = async (req, res) => {
    const { userid, mapid, routeid } = req.params;

        try {
            const deletedRoute = await routeService.deleteRouteById(userid, mapid, routeid);
            res.status(200).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}

const updateStartRouteById = async (req, res) => {
    const { userid, mapid, routeid } = req.params;
    const  { start }  = req.body;

    try {            
        const updatedRoute = await routeService.updateStartRouteById(userid, mapid, routeid, start);
        res.status(200).json(updatedRoute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateEndRouteById = async (req, res) => {
    const { userid, mapid, routeid } = req.params;
    const  { end }  = req.body;

    try {            
        const updatedRoute = await routeService.updateEndRouteById(userid, mapid, routeid, end);
        res.status(200).json(updatedRoute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateDistanceRouteById = async (req, res) => {
    const { userid, mapid, routeid } = req.params;
    const  { distance }  = req.body;

    try {            
        const updatedRoute = await routeService.updateDistanceRouteById(userid, mapid, routeid, distance);
        res.status(200).json(updatedRoute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const calculateOptimalPath = async (req, res) => {
    const { userid, mapid, routeid } = req.params;

    try {
        // Encuentra el usuario y el mapa
        const user = await User.findById(userid);
        if (!user) return res.status(404).json({ message: "User not found" });

        const map = user.maps.id(mapid);
        if (!map) return res.status(404).json({ message: "Map not found" });

        // Encuentra la ruta
        const route = map.routes.id(routeid);
        if (!route) return res.status(404).json({ message: "Route not found" });

        // Construir el grafo
        const graph = {};
        const width = map.dimensions.width;
        const height = map.dimensions.height;

        // Agregar obstáculos al grafo
        map.obstacles.forEach(obstacle => {
            const key = `${obstacle.position.x},${obstacle.position.y}`;
            graph[key] = {};
        });

        // Agregar los puntos válidos al grafo (sin obstáculos)
        for (let x = 0; x <= width; x++) {
            for (let y = 0; y <= height; y++) {
                const key = `${x},${y}`;
                if (!graph[key]) {
                    graph[key] = {};
                }
                // Conectar el punto con sus vecinos
                if (x > 0) graph[key][`${x-1},${y}`] = 1; // izquierda
                if (x < width) graph[key][`${x+1},${y}`] = 1; // derecha
                if (y > 0) graph[key][`${x},${y-1}`] = 1; // arriba
                if (y < height) graph[key][`${x},${y+1}`] = 1; // abajo
            }
        }

        // Ejecutar el algoritmo de A*
        const start = `${route.start.x},${route.start.y}`;
        const end = `${route.end.x},${route.end.y}`;
        const result = aStar(graph, start, end);

        // Actualiza la ruta con el camino óptimo
        const updatedRoute = map.routes.id(routeid);
        updatedRoute.optimalPath = result.path.map(p => {
            const [x, y] = p.split(',').map(Number);
            return { x, y };
        });

        await user.save(); // Guarda el usuario para actualizar el mapa

        res.json({ distance: result.distance, path: updatedRoute.optimalPath });
    } catch (error) {
        console.error(error); // Agrega un log del error para mayor detalle
        res.status(400).json({ message: error.message });
    }
};


const routeController = {
    creteRoute,
    getRoutesByMap,
    getRouteById,
    deleteRouteById,
    updateStartRouteById,
    updateEndRouteById,
    updateDistanceRouteById,
    calculateOptimalPath
};

export default routeController;
