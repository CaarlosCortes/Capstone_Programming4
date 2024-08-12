import passport from "passport";

const isAuthenticated = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(
        res.status(401).json({message: "Unauthorized"})
      );
    }
    req.user = user;
    next();
  })(req, res, next);
};

export default isAuthenticated;