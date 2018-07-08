const db = require('../models');

module.exports = {
  findAll: async (req, res) => {
    try {
      res.json(await db.Job.aggregate([{
        "$group": {
          _id: "$progress_stage",
          count: {
            $sum: 1
          }
        }
      }]))
    } catch (err) {
      res.status(422).json(err);
    }
  }
}