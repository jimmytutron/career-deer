const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(new LocalStrategy(User.authenticate()))
//   {
//     //Updating username field to email rather than default "username" from LocalStrategy
//     usernameField: 'email'
//   },
//   async function (email, password, done) {
//     console.log("bababababababbababa")
//     console.log(await db.User.authenticate()('robertshaw87@gmil.com', 'qwerty'))
//     done (null, "Test");
//   }
// ));

passport.use(new LocalStrategy(
  // Our user will sign in using a "email"
  {
    usernameField: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      email: email
    }).then(function(dbUser) {
      // If there's no user with the given name
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If there is a user with the given username, but the password the user gives us is incorrect
      else if (!dbUser.authenticate()(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));


passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

module.exports = passport;

