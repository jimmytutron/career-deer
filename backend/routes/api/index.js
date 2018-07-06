const router = require('express').Router();
const jobRoutes = require('./jobs');
const userRoutes = require('./login');
// TESTING
const authRoutes = require('./auth');

router.use('/api/jobs', jobRoutes);
router.use('/api/user', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
