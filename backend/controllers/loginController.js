const db = require('../models');

module.exports = {
  signUp: async (req, res) => {
    try {
      const user = new db.User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });
      await user.setPassword(req.body.password);
      await user.save();
      res.json(await db.User.authenticate()(req.body.email, req.body.password));
    } catch (err) {
      // console.log(err);
      res.status(422).json(err);
    }
  },

  // loggingIn: (req, res) => {
  //   try {
  //     // TODO: update json to logged in route.
  //     res.json('/loggedinpage')
  //   } catch (err) {
  //     res.status(422).json(err);
  //   }
  // },

  login: (req, res) => {
    try {
      db.User.
      res.json(req.body);
    } catch (err) {
      res.status(422).json(err);
    }

  },

  logout: (req, res) => {
    try {
      if (req.user) {
        req.session.destroy(err => {
          res.clearCookie('connect.sid')
          req.logout();
        })
      }
    } catch (err) {
      res.status(422).json(err);
    }
  }


}
