const db = require('../models');

module.exports = {
  update: async (req, res) => {
    console.log(req.user);
    if (req.user) {
      try {
        let query = {
          _id: req.body._id
        }
        res.json(await db.Note.findOneAndUpdate(query, {$set: {...req.body}}))
      } catch (err) {
        res.status(422).json(err)
      }
    } else {
      res.status(401).json("Unauthorized request. Please log in.")
    }
  }
}
