const axios = require('axios');
// const assert = require('assert');

async function login(email, password) {
      // const response = await axios.post('https://apim-msfwex17-23-domainapim-dev.azure-api.net/des-services/cas/v1/login', 
      const response = await axios.post('https://apim-msfwex17-23-domainapim-qa.azure-api.net/des-services/cas/v1/login', 
          {
            email: email,
            password: password
          }, 
          {
            headers: {
              'Content-Type': 'application/json',
              'X-DES-AK-TENANT-TOKEN': '7e703561de83b8193d2dd22a7084f39dbfbc26c15f7a994007af4da4d1970e25'
              // 'X-DES-AK-TENANT-TOKEN': '559fba115ea1488bb6695d03f475e5647601c22ca3bd78926f52b4771ef8e6ad'
            }
          });
    //   if (response.status === 200) {
    //     console.log(response.status);
    //    } else {
    //   console.log(response.status);
    // }
  return response; 
}
  login("rostyslav.sazonov+fe2_qa_51@gmail.com", "MLb3950FAtU4!") 
  module.exports = login;    

  // сделать через параметры логин и пароль
  //функция должна возвращать значение