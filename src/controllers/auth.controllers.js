import passport from "passport";

const loginUser = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
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
  
  const authController = {
    loginUser,
  };
  
  export default authController;