import passport from "passport";

const authenticate = (req, res, next) => {
    passport.authenticate("local", (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        res.status(401).json({message: "Unauthorized"})
      }
      req.login(user, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        return res.json({ access_token: user.access_token });
      });
    })(req, res, next);
  };
  
  export default authenticate;