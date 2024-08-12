import passport from "passport";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { User } from "../models/user.js";

dotenv.config();

const SECRET_JWT = process.env.SECRET_JWT;

passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          const user = await User.findOne({ username: username });
  
          if (!user) {
            return done(null, false, { message: ""});
          }
  
          const match = await bcrypt.compare(password, user.password);
  
          if (!match) {
            return done(null, false, { message: ""});
          }
  
          const access_token = jwt.sign(
            { id: user.id, username: user.username, email: user.email },
            SECRET_JWT,
            { expiresIn: "24h" },
          );
  
          return done(null, { id: user.id, access_token });
        } catch (error) {
          return done(error);
        }
      },
    ),
  );
  
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: SECRET_JWT,
      },
      (jwtPayload, done) => {
        if (jwtPayload.id) {
          return done(null, { id: jwtPayload.id, name: jwtPayload.name });
        }
        return done(null, false);
      },
    ),
  );
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
  
  export default passport;
