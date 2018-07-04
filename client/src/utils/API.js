
const axios = require('axios');

// Login/Sign up
export function signIn(data) {
  return axios.post('/api/user/login', data);
};

export function signUp(data) {
  return axios.post('/api/user/signup', data);
};

// Saved Notes
export function createNote(data) {
  return axios.post('/api/user/saved',data);
};

export function getAllNotes(data) {
  return axios.get('/api/user/saved');
};

export function getJobById(id) {
  return axios.get(`/api/user/saved/${id}`);
};

export function deleteJobById(id) {
  return axios.get(`/api/user/saved/${id}`);
};

export function updateJobById(id) {
  return axios.get(`/api/user/saved/${id}`);
};
