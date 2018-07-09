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
      }]));
    } catch (err) {
      res.status(422).json(err);
    }
  },

  findUser: async (req, res) => {
    if (req.user) {
      try {
        res.json(await db.Job.aggregate([{
          "$match": {
            user: req.user._id
          }
        }, {
          "$group": {
            _id: "$progress_stage",
            count: {
              $sum: 1
            }
          }
        }]));
      } catch (err) {
        res.status(422).json(err);
      }
    } else {
      res.status(401).json("Unauthorized request. Please login.");
    }
  }
}