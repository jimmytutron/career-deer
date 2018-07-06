const router = require('express').Router();
const passport = require('../../config/passport');
const loginController = require('../../controllers/loginController');

// Matching with "/api/user/login"
router.route('/login')
  .post(loginController.login)

router.route('/signup')
  .post(loginController.signUp)

router.route('/logout')
  .get(loginController.logout)


module.exports = router;
