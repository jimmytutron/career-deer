const db = require('../models');

module.exports = {
  signUp: async (req, res) => {
    console.log("=============Signing Up===============")
    try {
      const user = new db.User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      });
      await user.setPassword(req.body.password);
      await user.save();
      console.log()
      res.json({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email, 
        password: req.body.password
      });
    } catch (err) {
      res.status(422).json(err);
    }
  },

  login: async (req, res) => {
    console.log("-------------Logging In-----------------")
    console.log(req.body.email)
    console.log(req.body.password)
    try {
      const user = await db.User.authenticate()(req.body.email, req.body.password)
      console.log(user)
      res.json(user);
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
