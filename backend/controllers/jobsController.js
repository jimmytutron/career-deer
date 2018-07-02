const db = require('../models');

module.exports = {
  findAll: async (req, res) => {
     //This needs to change in order to handle user log in. (Is user still stored in req.user?
     //is the ide stored in _id or id?
    console.log(req.user);
    if (req.user) {
      try {
        let query = {
          user: req.user.id
        }
        res.json(await db.Job.find(query).populate("note").sort({ last_update: -1 }));
      } catch (err) {
        res.status(422).json(err);
      }
    } else {
      res.status(401).json("Unauthorized request. Please log in.")
    }
  },
  create: async (req, res) => {
    //This needs to change in order to handle user log in. (Is user still stored in req.user?)
    //is the id stored in _id or id?
    console.log(req.user);
    if (req.user) {
    try {
        newNote = await db.Note.create(newNote);
        let newJob = {
          ...req.body,
          user: req.user.id,
          note: newNote._id
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
    console.log(req.user);
    if (req.user) {
      try {
        let query = {
          _id: req.params.id
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
    if (req.user) {
      try {
        let query = {
          _id: req.body._id
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
          _id: req.body._id
        }
        let removed = await db.Job.remove(query);
        query = {
          user: req.user,
          _id: removed.note
        }
        await db.Note.remove(query);
        res.json(removed)
      } catch (err) {
        res.status(422).json(err)
      }
    } else {
      res.status(401).json("Unauthorized request. Please log in.")
    }
  }
}
