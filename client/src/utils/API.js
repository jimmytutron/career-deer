
const axios = require('axios');

// Login/Sign up
export function signIn(data) {
  return axios.post('/api/user/login', data);
};

export function signUp(data) {
  return axios.post('/api/user/signup', data);
};

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
