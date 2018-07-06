const db = require('../models');
const passport = require('passport');

module.exports = {

  authenticate: async() => {
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