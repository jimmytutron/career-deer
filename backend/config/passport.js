const passport = require('passport');
const db = require('../models');

const strategy = db.User.createStrategy();

// passport.use(db.User.createStrategy());

// passport.serializeUser(db.User.serializeUser());
// passport.deserializeUser(db.User.deserializeUser());

module.exports = strategy;
