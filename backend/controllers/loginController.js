const db = require('../models');
const passport = require('../config/');

module.exports = {
  signUp: async (req, res, next) => {
    try {
      const user = new db.User({
        email: req.body.email.toLowerCase(),
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });
      await user.setPassword(req.body.password);
      await user.save();

      // log in after signing up
      passport.authenticate('local')(req, res, next)
    } catch (err) {
      res.status(422).json(err);
    }
  },

  login: async (req, res) => {
    user = await db.User.findOne({email: req.body.email});
    res.cookie("firstName", user.firstName);
    res.cookie("lastName", user.lastName);
    res.cookie("email", user.email);
    res.json({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    });
  },

  logout: (req, res, next) => {
    if (req.user) {
      req.logOut();
      req.session.destroy(function (err) {
        if (err) { 
          return next(err); 
        }
        res.clearCookie("connect.sid");
        res.clearCookie("firstName");
        res.clearCookie("lastName");
        res.clearCookie("email");
        res.redirect('/');
        // return res.send({ authenticated: req.isAuthenticated() });
      });
    }
  }
};
