const axios = require('axios');
const moment = require('moment');

// const req = {
//   query: {
//     keywords: "web developer",
//     location: "san francisco"
//   }
// }

// const test = async (req, res) => {
module.exports = async (req, res) => {

  const { keywords, location } = req.query;

  const AUTHJOB_API_KEY = process.env.AUTHJOB_API_KEY
  // const AUTHJOB_API_KEY = ''

  // keywords in authJobs uses comma, and are listed as OR conditions.
  // location example sanfranciscocaus
  const authJobs_keywords = keywords.trim().replace(/ /g, ",");
  const authJobs_location = location.trim().replace(/ /g, "+").replace(/,/g, "");

  //Changing keywords to an array for multiple queries on github.
  const github_keywords = keywords.trim().replace(/ /g, "+");
  const github_location = location.trim().replace(/ /g, "+");

  const findJobs_keywords = keywords.trim().replace(/ /g, "+");
  const findJobs_location = location.trim().replace(/ /g, "+");


  try {

    const jobList = [];

    const authJobs_url = `https://authenticjobs.com/api/?api_key=${AUTHJOB_API_KEY}&method=aj.jobs.search&perpage=100&format=json&keywords=${authJobs_keywords}&location=${authJobs_location}`

    console.log(authJobs_url);

    // GET request for authenticJobs API
    const data_authJobs = await axios({
      method: 'get',
      url: authJobs_url,
      responseType: 'text'
    })

    // Storing the results array from authentic jobs api.
    const res_authJobs = data_authJobs.data.listings.listing;

    // console.log(res_authJobs)
    for (let h = 0; h < res_authJobs.length; h++) {
      const authJob_jobData = {};
      authJob_jobData.post_date = moment(res_authJobs[h].post_date, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD");
      authJob_jobData.title = res_authJobs[h].title;
      authJob_jobData.url = res_authJobs[h].url;
      authJob_jobData.company_name = res_authJobs[h].company.name;
      authJob_jobData.type = res_authJobs[h].type.name;
      authJob_jobData.location = res_authJobs[h].company.location.name;
      authJob_jobData.description = res_authJobs[h].description;
      authJob_jobData.logo_url = res_authJobs[h].company.logo;

      jobList.push(authJob_jobData);
    }


    const github_url = `https://jobs.github.com/positions.json?description=${github_keywords}&location=${github_location}`;
    const data_github = await axios({
      method: 'get',
      url: github_url,
      responseType: 'json'
    })
    // console.log(data.data);
    for (let j = 0; j < data_github.data.length; j++) {
      const github_jobData = {};
      github_jobData.post_date = moment(data_github.data[j].created_at, "ddd MMM DD  HH:mm:ss zzz YYYY").format("YYYY-MM-DD");
      // github_jobData.post_date = data_github.data[j].created_at;
      github_jobData.title = data_github.data[j].title;
      github_jobData.url = data_github.data[j].url;
      github_jobData.company_name = data_github.data[j].company;
      github_jobData.type = data_github.data[j].type;
      github_jobData.location = data_github.data[j].location;
      github_jobData.description = data_github.data[j].description;
      github_jobData.logo_url = data_github.data[j].company_logo;

      jobList.push(github_jobData);
    }


    const findJobs_url = `https://find.jobs/search?keyword=${findJobs_keywords}&location=${findJobs_location}`
    const data_findJobs = await axios.get({
      method: 'get',
      url: findJobs_url,
      responseType: 'json'
    })

    // .then(function (response) {
    const $ = cheerio.load(data_findJobs);
    ;
    // const numbResults = $("article.advance-search-job").length;

    $("article.advance-search-job").each(function (i, element) {

      let find_title = $(this).find("a.job_title").text();
      let find_url = $(this).find("a.job_title").attr("href");
      let find_company = $(this).find("i.fa.fa-building").next().text();
      let find_location = $(this).find("i.fa.fa-map-marker").next().text();

      const find_jobData = {};

      find_jobData.title = find_title;
      find_jobData.url = find_url;
      find_jobData.company_name = find_company;
      find_jobData.location = find_location;

      jobList.push(find_jobData);

    });

    // console.log(jobList);

    res.json(jobList);


  } catch (err) {
    console.log(err);

  }

}

// test(req);




