const passport = require('passport');
const LocalStrategy = require('passport-local');

const db = require('../models');

// const strategy = new LocalStrategy(
//   function (username, password, done) {
//     db.User.findOne({
//       email: username
//     }, (err, user) => {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false, {
//           message: 'Incorrect username.'
//         });
//       }
//       if (!user.authenticate(password)) {
//         return done(null, false, {
//           message: 'Incorrect password.'
//         });
//       }

//       return done(null, user);

//     });

//   }
// )
const strategy = db.User.createStrategy();
passport.use(strategy);

passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

module.exports = passport;
