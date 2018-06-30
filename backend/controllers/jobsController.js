const db = require('../models');

module.exports = {
    findAll: async (req, res) => {
        try {
            res.json(await db.Job.find(req.query).sort({last_update: -1}));
        } catch (err) {
            res.status(422).json(err);
        }
    },
    create: async (req, res) => {
        try {
            res.json(await db.Job.create(req.body));
        } catch (err) {
            res.status(422).json(err);
        }
    }
}