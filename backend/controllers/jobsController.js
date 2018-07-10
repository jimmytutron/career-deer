const db = require('../models');

module.exports = {
  findAll: async (req, res) => {
    if (req.user) {
      try {
        let query = {
          user: req.user._id
        }
        res.json(await db.Job.find(query).sort({ last_update: -1 }));
      } catch (err) {
        res.status(422).json(err);
      }
    } else {
      res.status(401).json("Unauthorized request. Please log in.")
    }
  },
  create: async (req, res) => {
    if (req.user) {
      try {
        const newJob = {
          ...req.body,
          note: [req.body.note],
          user: req.user._id,
        }
        res.json(await db.Job.create(newJob));
      } catch (err) {
        res.status(422).json(err);
      }
    } else {
      res.status(401).json("Unauthorized request. Please log in.")
    }
  },
  findOne: async (req, res) => {
    console.log(req.user,'Req.user');
    console.log(req.params.id,'Req.params.id');
    if (req.user) {
      try {
        let query = {
          _id: req.params.id,
          user: req.user._id
        }
        res.json(await db.Job.findOne(query).populate("note"))
      } catch (err) {
        res.status(422).json(err)
      }
    } else {
      res.status(401).json("Unauthorized request. Please log in.")
    }
  },
  update: async (req, res) => {
    console.log(req.user);
    console.log(req.body);
    if (req.user) {
      try {
        let query = {
          _id: req.body._id,
          user: req.user._id
        }
        res.json(await db.Job.findOneAndUpdate(query, {$set: {...req.body}}))
      } catch (err) {
        res.status(422).json(err)
      }
    } else {
      res.status(401).json("Unauthorized request. Please log in.")
    }
  },
  // Should also delete all the notes for the deleted job
  delete: async (req, res) => {
    console.log(req.user);
    if (req.user) {
      try {
        let query = {
          _id: req.body._id,
          user: req.user._id
        }
        let removed = await db.Job.remove(query);
        // May need to be removed.data
        res.json(removed)
      } catch (err) {
        res.status(422).json(err)
      }
    } else {
      res.status(401).json("Unauthorized request. Please log in.")
    }
  }
}
