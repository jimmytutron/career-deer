const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: false
  }
})

userSchema.plugin(passportLocalMongoose, {
  //Updating username field to email rather than default "username" from LocalStrategy
  usernameField: 'email'
});

// userSchema.methods.authenticate = function(password) {
//   return bcrypt.compareSync(password, this.password)
// }

const User = mongoose.model("User", userSchema);
module.exports = User;
