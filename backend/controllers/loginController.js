const generateHash = require('random-hash');
// import generateHash from 'random-hash';

const db = require('../models');
const passport = require('../config/');
const nodemailer = require('../services/nodemailer');


module.exports = {

  initialLoad: (req, res) => {
    let user = false;
    if (req.user) {
      user = {
        firstName: req.user.firstName,
        lastName: req.user.lastName
      }
    }
    res.json(user);

  },

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

      // log in after signing up.
      // - Add a conditional check for what type of login is occurring
      // - pass the corresponding string into the authenticate method. for the type of login occurring
      passport.authenticate('local')(req, res, next)
    } catch (err) {
      res.status(422).json(err);
    }
  },

  login: async (req, res) => {
    user = await db.User.findOne({ email: req.body.email });
    res.json({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    });
  },

  logout: (req, res, next) => {
    req.logOut();
    res.clearCookie("connect.sid");
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid");
      return res.send({ authenticated: req.isAuthenticated() });
    });
  },

  resetPW: async (req, res) => {
    try {
      const randomHash = generateHash.generateHash({
        length: 64,
        charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
      });

      const query = {
        email: req.body.email
      }

      const newPWResetHash = {
        'resetPW_hash': randomHash
      }

      user = await db.User.findOneAndUpdate(query, { $set: newPWResetHash })

      const emailData = getResetPWText(user.email, user.firstName, user.lastName, randomHash);
      nodemailer(emailData);

      res.json(query.email);
    } catch (err) {
      res.status(422).json(err);
    }
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



function getResetPWText(email, firstName, lastName, randomHash) {
  const emailObj = {
    emailTo: email,
    firstName: firstName,
    lastName: lastName
  }

  emailObj.emailSubject = `Password Reset Request for Career Deer`;

  emailObj.emailText = `Hello ${firstName}, a password reset has been requested for your Career Deer account. To reset the password for your account, click the url below. Or you may copy and paste into your browser's address bar. https://careerdeer.herokuapp.com/updatepw?=${randomHash}`;

  emailObj.emailHtml = `
    <div style="text-align: center; font-family:Open Sans,Helvetica;">
      <div style="width: 600px; margin-left: auto; margin-right: auto;">
        <img src="https://i.imgur.com/DxHFy4x.png" width="60%" alt="Career Deer Logo">
        <h2>Password Reset Requested.</h2>
        <div style="text-align: left;">
          <p>Hello ${firstName},</p>
          <p>A password reset has been requested for your Career Deer account.</p>
          <p>To reset the password for your account, click the url below. Or you may copy and paste into your browser's address bar.</p>
          <a href="https://careerdeer.herokuapp.com/updatepw?=${randomHash}">https://careerdeer.herokuapp.com/updatepw?=${randomHash}</a>
        </div>
      </div>
    </div>`;

  return emailObj;
}


