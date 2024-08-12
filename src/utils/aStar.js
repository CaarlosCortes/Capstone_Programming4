// src/utils/aStar.js

const heuristic = (a, b) => {
    const [x1, y1] = a.split(',').map(Number);
    const [x2, y2] = b.split(',').map(Number);
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

const aStar = (graph, start, end) => {
    const openSet = new Set([start]);
    const cameFrom = {};
    const gScore = { [start]: 0 };
    const fScore = { [start]: heuristic(start, end) };

    while (openSet.size > 0) {
        const current = Array.from(openSet).reduce((a, b) => fScore[a] < fScore[b] ? a : b);

        if (current === end) {
            return { path: reconstructPath(cameFrom, current), distance: gScore[end] };
        }

        openSet.delete(current);
        const neighbors = graph[current] || {};

        for (const neighbor in neighbors) {
            const tentativeGScore = gScore[current] + neighbors[neighbor];

            if (tentativeGScore < (gScore[neighbor] || Infinity)) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, end);
                openSet.add(neighbor);
            }
        }
    }

    return { path: [], distance: Infinity };
};

const reconstructPath = (cameFrom, current) => {
    const path = [current];
    while (cameFrom[current]) {
        current = cameFrom[current];
        path.push(current);
    }
    return path.reverse();
};

export { aStar };
