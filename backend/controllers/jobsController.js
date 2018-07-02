const db = require('../models');

module.exports = {
  findAll: async (req, res) => {
     //This needs to change in order to handle user log in. (Is user still stored in req.user?
     //is the ide stored in _id or id?
    console.log(req.user);
    try {
      let query = {
        user: req.user._id
      }
      res.json(await db.Job.find(query).sort({ last_update: -1 }));
    } catch (err) {
      res.status(422).json(err);
    }
  },
  create: async (req, res) => {
    //This needs to change in order to handle user log in. (Is user still stored in req.user?)
    //is the id stored in _id or id?
    console.log(req.user);
    try {
      let newJob = {
        ...req.body,
        user: req.user._id
      }
      res.json(await db.Job.create(newJob));
    } catch (err) {
      res.status(422).json(err);
    }
  },
  findOne: async (req, res) => {
    console.log(req.user);
    try {
      let query = {
        ... req.body,
        user: req.user._id
      }
      res.json(await db.Job.findOne(query))
    } catch (err) {
      res.status(422).json(err)
    }
  },
  update: async (req, res) => {
    console.log(req.user);
    try {
      let query = {
        _id: req.body._id,
        user: req.user._id
      }
      res.json(await db.Job.findOneAndUpdate(query, {$set: {...req.body}}))
    } catch (err) {
      res.status(422).json(err)
    }
  },
  // Should also delete all the notes for the deleted job
  delete: async (req, res) => {
    console.log(req.user);
    try {
      let query = {
        ... req.body,
        user: req.user._id
      }
      let removed = await db.Job.remove(query);
      query = {
        user: req.user,
        job: removed._id
      }
      await db.Node.remove(query);
      res.json(removed)
    } catch (err) {
      res.status(422).json(err)
    }
  }
}
