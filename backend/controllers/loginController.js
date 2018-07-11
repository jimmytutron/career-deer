const db = require('../models');
const passport = require('../config/');
// Banana

module.exports = {
  signUp: async (req, res, next) => {
    try {
      const user = new db.User({
        email: req.body.email,
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
    res.json({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    });
  },

  logout: (req, res, next) => {
    if (req.user) {
      req.logout();
      req.session.destroy(function (err) {
        if (err) { 
          return next(err); 
        }
        return res.send({ authenticated: req.isAuthenticated() });
      });
    }
  }
};
