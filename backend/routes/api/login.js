const router = require('express').Router();
const loginController = require('../../controllers/loginController');
const passport = require('../../config/passport.js');

// Matching with "/api/user/login"
router.route('/login')
  .post(passport.authenticate('local'), loginController.login)

router.route('/signup')
  .post(loginController.signUp, loginController.login)

router.route('/logout')
  .get(loginController.logout)


module.exports = router;
