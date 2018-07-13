const db = require('../models');
const passport = require('../config/');
const nodemailer = require('../services/nodemailer');

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

      const emailData = getSignUpText(req.body.email, req.body.firstName, req.body.lastName);
      nodemailer(emailData);

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
};

function getSignUpText(email, firstName, lastName) {
  const emailObj = {
    emailTo: email,
    firstName: firstName,
    lastName: lastName
  }

  emailObj.emailSubject = `Welcome to Career Deer!`;

  emailObj.emailText = `Hi ${firstName}, thanks for joining us in your adventure to track down a new job. Let us help you keep track of your job applications and provide analytics to help you find and improve areas of concern.`;

  emailObj.emailHtml = `
    <div style="text-align: center; font-family:Open Sans,Helvetica;">
      <div style="width: 600px; margin-left: auto; margin-right: auto;">
        <img src="https://i.imgur.com/DxHFy4x.png" width="60%" alt="Career Deer Logo">
        <h2>Welcome to Career Deer!</h2>
        <div style="text-align: left;">
          <p>Hello ${firstName}</p>
          <p>Thanks for joining us in your adventure to track down a new job.</p>
          <p>Let us help you keep track of your job applications and provide analytics to help you find and improve areas of concern.</p>
        </div>
      </div>
    </div>`;

  return emailObj;

}



