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
        const percentiles = await getPercentiles(req);

        console.log("=========================");
        console.log("console logging the percentiles from backend")
        console.log(percentiles);
        // console.log(percentiles.data);

        res.json(percentiles);
      } catch (err) {
        res.status(422).json(err);
      }
    } else {
      res.status(401).json("Unauthorized request. Please login.");
    }
  }


}

function getPercentiles(req) {
  //gt = Greater Than, lt = Less Than.
  //gtData provides the number of users above current user
  const { saved, applied, phone, onSite, offer } = req.query

  const aboveUserSaved = getGtData("saved", saved);
  const belowUserSaved = getLtData("saved", saved);

  const aboveUserApplied = getGtData("applied", applied);
  const belowUserApplied = getLtData("applied", applied);

  const aboveUserPhone = getGtData("phone", phone);
  const belowUserPhone = getLtData("phone", phone);

  const aboveUserSite = getGtData("on-site", onSite);
  const belowUserSite = getLtData("on-site", onSite);

  const aboveUserOffer = getGtData("offer", offer);
  const belowUserOffer = getLtData("offer", offer);

  return Promise.all([
    aboveUserSaved, belowUserSaved,
    aboveUserApplied, belowUserApplied,
    aboveUserPhone, belowUserPhone,
    aboveUserSite, belowUserSite,
    aboveUserOffer, belowUserOffer
  ]);

}

//Takes in a progress stage and a count for comparison against each user. Returns the number of unique users less than or equal to count.
async function getLtData(stage, stageCount) {
  const obj = {};
  try {
    const data = await db.Job.aggregate([
      {
        "$group": {
          "_id": {
            "progress_stage": "$progress_stage",
            "user": "$user"
          },
          "count": { "$sum": 1 }
        }
      }
      , {
        "$match": {
          "_id.progress_stage": stage,
          "count": { "$lte": parseInt(stageCount) }
        }
      }, {
        "$group": {
          "_id": "$_id.progress_stage",
          "uniqueUsers": { "$sum": 1 }
        }
      }]
    );

    if(data[0] !== undefined){
      obj.belowUser = data[0];
    } else {
      obj.belowUser = {
        "_id": stage,
        "uniqueUsers": 0
      }
    }

    return obj;
  } catch (err) {
    console.log(err);
  }
}

//Takes in a progress stage and a count for comparison against each user. Returns the number of unique users greater than count.
async function getGtData(stage, stageCount) {
  const obj = {};
  try {
    const data = await db.Job.aggregate([
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

    if(data[0] !== undefined){
      obj.aboveUser = data[0];
    } else {
      obj.aboveUser = {
        "_id": stage,
        "uniqueUsers": 0
      }
    }

    return obj;
  } catch (err) {
    console.log(err);
  }
}


