const router = require('express').Router();
const authController = require('../../controllers/authController');
const passport = require('passport');

// prepended with /auth/
router.route('/google')
  .get(passport.authenticate('google', { scope: ['profile'] }));

module.exports = router;
