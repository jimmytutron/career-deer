const db = require('../models');

module.exports = {
  authenticate: async() => {
    console.log('I am hit!');
    res.json('I am hit!');
  },

  login: async (req,res) => {
    // handle with passport
  },

  logout: async (req,res) => {
    // handle with passport
  }

}