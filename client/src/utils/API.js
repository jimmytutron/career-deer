
const axios = require('axios');

export default {
  testRoute: function() {
    return axios.get('/tests');
  }
};
