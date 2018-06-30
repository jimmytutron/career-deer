const router = require('express').Router();
const jobsController = require('../../controllers/jobsController');
// const authJobs = require('../../services/authJobs')

// Matching with "/api/jobs/search/?"
router.route('/search/?')
    .get(authJobs)
    
// Matching with "/api/jobs/saved"
router.route('/saved')
    .get(jobsController.findAll)
    .post(jobsController.create)

// Matching with "/api/jobs/saved/:id"
// For retrieving info on 1 job, should also populate notes.
router.route('/saved/:id')
    .get(jobsController.findOne)

module.exports = router;
