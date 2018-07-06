const passport = require('passport');
const mongooseStrategy = require('passport-local-mongoose');
// console.log(LocalStrategy)

const db = require('../models');

passport.use(db.User.createStrategy(
  function (username, password, done) {
    db.User.findOne({
      email: username
    }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'Incorrect username.'
        });
      }
      if (!user.authenticate(password)) {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }

      return done(null, user);

    });

  }
));

passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

module.exports = passport;
