const axios = require('axios');

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.validateStatus = (status) => {return status < 500; }


module.exports = axios;