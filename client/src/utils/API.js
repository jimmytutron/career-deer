
const axios = require('axios');

export function signIn(data) {
  return axios.post('/api/user/login', data);
}

export function anotherAPICall(doSomething) {
  return axios.get('/api/user/something',doSomething);
}
