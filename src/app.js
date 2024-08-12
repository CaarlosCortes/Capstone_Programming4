import express from "express";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import { userRoutes } from "./routes/v1/user.route.js";
import { authRoutes } from "./routes/v1/auth.route.js";
import { mapRoutes } from "./routes/v1/map.route.js";
import { routeRoutes } from "./routes/v1/route.route.js";
import { obstacleRoutes } from "./routes/v1/obstacle.route.js";
import { waypointRoutes } from "./routes/v1/waypoint.route.js";
import "./config/passport.js"

const SESSION_SECRET = process.env.SESSION_SECRET;

export const initServer = (port) => {
    const app = express();
    
    app.use(morgan("dev"));
    app.use(express.json());

    app.use(
        session({
          secret: SESSION_SECRET,
          resave: false,
          saveUninitialized: true,
        }),
      );
      
      app.use(passport.initialize());
      app.use(passport.session());

    app.use("/api/v1/users", userRoutes);
    app.use("/api/v1/auth", authRoutes);
    app.use("/api/v1/maps", mapRoutes);
    app.use("/api/v1/routes", routeRoutes);
    app.use("/api/v1/obstacles", obstacleRoutes);
    app.use("/api/v1/waypoints", waypointRoutes)
    
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
};