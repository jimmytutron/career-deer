
const axios = require('axios');

export function signIn(data) {
  return axios.post('/login', data);
}

export function anotherAPICall(doSomething) {
  return axios.get('/something',doSomething);
}
