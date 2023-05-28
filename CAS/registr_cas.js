const axios = require('axios');
const defaultPayload = require('../CAS/requestData/registration');

async function userRegistr(newPayload) {
        
      const request = { ...defaultPayload, ...newPayload };
      
      const response = await axios.post('https://apim-msfwex17-23-domainapim-dev.azure-api.net/des-services/cas/v1/register', request, {
      headers: {
        'Content-Type': 'application/json',
        'X-DES-AK-TENANT-TOKEN': '559fba115ea1488bb6695d03f475e5647601c22ca3bd78926f52b4771ef8e6ad'
      }
    });

      if (response.status === 200) {
        console.log('Успешная регистрация');
        console.log("uuid: " + response.data.uuid);
        console.log("email: " + request.email);
      } else {
        console.log('Ошибка регистрации');
      }

      return (response);
    }

    const newpayload = {
      "firstname": "Test New",
      "lastname": "Test New",
      "email": "rostyslav.sazonov+fe1_auto_new_2@gmail.com",
    };
    
    userRegistr(newpayload);
  
    //функция должна возвращать значение
    // сделать через параметры - переадем валидный джейсон, можем заменить любой параметр в нем