const db = require('../models');

module.exports = {
  findAll: async (req, res) => {
    //This needs to change in order to handle user log in. (Is user still stored in req.user?
    //is the ide stored in _id or id?
   console.log(req.user);
   try {
     let query = {
       user: req.user._id,
       job: req.body.job
     }
     res.json(await db.Note.find(query).sort({ last_update: -1 }));
   } catch (err) {
     res.status(422).json(err);
   }
  },
  create: async (req, res) => {
    //This needs to change in order to handle user log in. (Is user still stored in req.user?)
    //is the id stored in _id or id?
    console.log(req.user);
    try {
      let newNote = {
        ...req.body,
        user: req.user._id
      }
      res.json(await db.Note.create(newNote));
    } catch (err) {
      res.status(422).json(err);
    }
  },
  update: async (req, res) => {
    console.log(req.user);
    try {
      let query = {
        _id: req.body._id,
        user: req.user._id,
        job: req.body.job
      }
      res.json(await db.Note.findOneAndUpdate(query, {$set: {...req.body}}))
    } catch (err) {
      res.status(422).json(err)
    }
  },
  delete: async (req, res) => {
    console.log(req.user);
    try {
      let query = {
        ... req.body,
        user: req.user._id
      }
      res.json(await db.Note.remove(query))
    } catch (err) {
      res.status(422).json(err)
    }
  }
}
