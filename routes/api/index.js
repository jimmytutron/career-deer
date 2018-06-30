const router = require('express').Router();
const jobRoutes = require('./jobs');

router.use("/api/jobs", jobRoutes);

module.exports = router;