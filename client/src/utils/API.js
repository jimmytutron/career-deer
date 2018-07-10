
const axios = require('axios');

// Basic Login/Sign up
export function signIn(data) {
  return axios.post('/api/user/login', data);
};

export function signUp(data) {
  return axios.post('/api/user/signup', data);
};

// ======================================================

// TESTING OAuth Logins
export function googleSignUp(data) {
  return axios.post('/auth/google', data);
};

export function googleSignIn() {
  return axios.get('/auth/google');
};

// ======================================================
// Jobs
export function createJob(data) {
  return axios.post('/api/jobs/saved', data);
};

export function getAllJobs() {
  return axios.get('/api/jobs/saved');
};

export function getJobById(id) {
  return axios.get(`/api/jobs/saved/${id}`);
};

export function deleteJobById(id) {
  return axios.delete(`/api/jobs/saved/${id}`);
};

export function updateJobById(id, data) {
  console.log("219301923109230129310923012931029309129301293")
  console.log(id)
  console.log(data)
  console.log("gjkfds;glskdfjg;lsdkfjg;sldkfgj;sldkfgjs;ldfkgj;sldfkg")
  return axios.put(`/api/jobs/saved/${id}`, data);
};

// ======================================================
// Chart
export function getJobDataAll(){
  return axios.get('/api/jobs/chart/all');
};

export function getJobDataUser(){
  return axios.get('/api/jobs/chart/user');
};

// ======================================================
// Search
export function getSearchResults(keywords, location){
  return axios.get(`/api/jobs/search/?keywords=${keywords}&location=${location}`);
};

