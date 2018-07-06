const router = require('express').Router();
const jobRoutes = require('./jobs');
const userRoutes = require('./login');

router.use('/api/jobs', jobRoutes);
router.use('/api/user', userRoutes);

module.exports = router;
