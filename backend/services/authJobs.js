const axios = require('axios');
const moment = require('moment');

// const req = {
//   query: {
//     keywords: "sql python",
//     location: "new york"
//   }
// }

// const test = async (req, res) => {
module.exports = async (req, res) => {

  const { keywords, location } = req.query;

  const AUTHJOB_API_KEY = process.env.AUTHJOB_API_KEY
  // const AUTHJOB_API_KEY = ''

  // keywords in authJobs uses comma, and are listed as OR conditions.
  // location example sanfranciscocaus
  const authJobs_keywords = keywords.replace(/ /g, "+");
  const authJobs_location = location.replace(/ /g, "");

  //Changing keywords to an array for multiple queries on github.
  const github_keywords = keywords.replace(/ /g, "+");
  const github_location = location.replace(/ /g, "+");

  try {

    const jobList = [];
    let jobData = {};

    const authJobs_url = `https://authenticjobs.com/api/?api_key=${AUTHJOB_API_KEY}&method=aj.jobs.search&perpage=100&format=json&keywords=${authJobs_keywords}&location=${authJobs_location}`

    // GET request for authenticJobs API
    const data_authJobs = await axios({
      method: 'get',
      url: authJobs_url,
      responseType: 'text'
    })

    // Storing the results array from authentic jobs api.
    const res_authJobs = data_authJobs.data.listings;

    for (let h = 0; h < res_authJobs.length; h++) {
      jobData = {};
      jobData.post_date = res_authJobs[h].post_date;
      jobData.title = res_authJobs[h].title;
      jobData.url = res_authJobs[h].url;
      jobData.company_name = res_authJobs[h].company.name;
      jobData.type = res_authJobs[h].type.name;
      jobData.location = res_authJobs[h].company.location.name;
      jobData.description = res_authJobs[h].description;
      jobData.logo_url = res_authJobs[h].company.logo;

      jobList.push(jobData);
    }

    // for (let i = 0; i < github_keywords.length; i++) {

    // console.log(github_keywords[i]);
    // console.log(github_location);
    const github_url = `https://jobs.github.com/positions.json?description=${github_keywords}&location=${github_location}`;
    const data_github = await axios({
      method: 'get',
      url: github_url,
      responseType: 'json'
    })
    // console.log(data.data);
    for (let j = 0; j < data_github.data.length; j++) {
      jobData = {};
      jobData.post_date = data_github.data[j].created_at;
      jobData.title = data_github.data[j].title;
      jobData.url = data_github.data[j].url;
      jobData.company_name = data_github.data[j].company;
      jobData.type = data_github.data[j].type;
      jobData.location = data_github.data[j].location;
      jobData.description = data_github.data[j].description;
      jobData.logo_url = data_github.data[j].company_logo;

      jobList.push(jobData);

    }

    console.log(jobList);

    res.json(jobList);
    // }



  } catch (err) {
    console.log(err);

  }

}

// test(req);




