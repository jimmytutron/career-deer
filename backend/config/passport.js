const db = require('../models');

const strategy = db.User.createStrategy();

module.exports = strategy;
