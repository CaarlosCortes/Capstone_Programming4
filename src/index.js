import { initDB } from "./config/db.js";
import { initServer } from "./app.js";

const port = 3000;

(async () => {
    await initDB();

    initServer(port);
})();