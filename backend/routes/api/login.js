const router = require('express').Router();
const loginController = require('../../controllers/loginController');
const passport = require('passport');

// Matching with "/api/user/login"
router.route('/login')
  .post(loginController.login)

router.route('/signup')
  .post(loginController.signUp)

router.route('/logout')
  .get(loginController.logout)


module.exports = router;
