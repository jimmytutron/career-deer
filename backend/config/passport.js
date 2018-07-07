const passport = require('passport');
const db = require('../models');

const strategy = db.User.createStrategy();

module.exports = strategy;
