const db = require('../models');
const passport = require('passport');

module.exports = {

  authenticate: async() => {
    console.log("I'm hit!");
    (() => passport.authenticate('google', {
      scope: ['profile']
    }))();
  },

  login: async (req,res) => {
    // handle with passport
  },

  logout: async (req,res) => {
    // handle with passport
  }

}