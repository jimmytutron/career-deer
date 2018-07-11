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
  },

  userPercentile: async (req, res) => {
    if (req.user) {
      try {
        console.log("backend", req.query);
        const percentiles = await getPercentiles(req);
        console.log("================================");
        console.log(percentiles.data);
        console.log("================================");
        res.json(percentiles.data);
      } catch (err) {
        res.status(422).json(err);
      }
    } else {
      res.status(401).json("Unauthorized request. Please login.");
    }
  }


}

async function getPercentiles(req) {
  //gt = Greater Than, lt = Less Than.
  //gtSaved provides the number of users if less than current user
  const { saved, applied, phone, onSite, offer } = req.query

  const userGtPopSaved = await getGtData("saved", saved);
  const userLtPopSaved = getLtData("saved", saved);

  const userGtPopApplied = await getGtData("applied", applied);
  const userLtPopApplied = getLtData("applied", applied);

  const userGtPopPhone = await getGtData("phone", phone);
  const userLtPopPhone = getLtData("phone", phone);

  const userGtPopSite = await getGtData("on-site", onSite);
  const userLtPopSite = getLtData("on-site", onSite);

  const userGtPopOffer = await getGtData("offer", offer);
  const userLtPopOffer = getLtData("offer", offer);

  // return Promise.all([userGtPopSaved]);


  return Promise.all([
    userGtPopSaved, userLtPopSaved,
    userGtPopApplied, userLtPopApplied,
    userGtPopPhone, userLtPopPhone,
    userGtPopSite, userLtPopSite,
    userGtPopOffer, userLtPopOffer
  ]);

}

//Takes in a progress stage and a count for comparison against each user. Returns the number of unique users less than count.
async function getGtData(stage, stageCount) {

  console.log("getGtData: ", stage, stageCount);
  console.log(db.Job,'JOBS HERE');
  try {
    const data = await db.jobs.aggregate([
      {
        $group: {
          _id: {
            "progress_stage": "$progress_stage",
            "user": "$user"
          },
          count: { "$sum": 1 }
        }
      }
      , {
        "$match": {
          "_id.progress_stage": stage,
          count: { "$lt": parseInt(stageCount) }
        }
      }, {
        "$group": {
          _id: "$_id.progress_stage",
          "uniqueUsers": { "$sum": 1 }
        }
      }]
    )
  } catch(err) {
    console.log(err);
  }


  console.log("=============================")
  console.log("gtDATACHIKCIHCHCICCICK: ", data);
  console.log("=============================")
  return data;
}

//Takes in a progress stage and a count for comparison against each user. Returns the number of unique users greater than count.
async function getLtData(stage, stageCount) {

  console.log("getLtData: ", stage, stageCount);
   try {
    const data = await db.jobs.aggregate([
      {
        $group: {
          _id: {
            "progress_stage": "$progress_stage",
            "user": "$user"
          },
          count: { "$sum": 1 }
        }
      }, {
        "$match": {
          "_id.progress_stage": stage,
          count: { "$gt": parseInt(stageCount) }
        }
      }, {
        "$group": {
          _id: "$_id.progress_stage",
          "uniqueUsers": { "$sum": 1 }
        }
      }]
    )
  } catch(err) {
    console.log(err);
  }

  console.log("ltDATA: ", data);
  return data;
}


