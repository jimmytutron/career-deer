
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
  return axios.post('/api/jobs/saved',data);
};

export function getAllJobs(data) {
  return axios.get('/api/jobs/saved');
};

export function getJobById(id) {
  return axios.get(`/api/jobs/saved/${id}`);
};

export function deleteJobById(id) {
  return axios.delete(`/api/jobs/saved/${id}`);
};

export function updateJobById(id) {
  return axios.put(`/api/jobs/saved/${id}`);
};

export function getJobData(){
  return axios.get('/api/jobs/chart');
}
