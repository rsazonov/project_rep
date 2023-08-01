const axiosWrapper = require('../Library/axios_wrapper');
const defaultPayload = require('../CAS/requestData/registration');
const defaultAgeVerificationPayload = require('../AVP/requestData/age_verification');
const loginURL = 'https://apim-msfwex17-23-domainapim-stg.azure-api.net/des-services/cas/v1/login';
const registerURL = 'https://apim-msfwex17-23-domainapim-stg.azure-api.net/des-services/cas/v1/register';
// const tenantToken = '64fae1fc79ff46baa54a5eca79971c8f400baba964cdb09937d9b34e21c6afa4';

class casClass  {
  async login(email, password, tenantToken) {
    const { data, status } = await axiosWrapper.post(
      loginURL,
      {
        email: email,
        password: password
      },
      {
        headers: {
          'X-DES-AK-TENANT-TOKEN': tenantToken
        }
      }
    );
    return { data, status };
  }

  async userRegistr(newPayload, tenantToken) {
    const registerRequest = { ...defaultPayload, ...newPayload };
    const { data, status } = await axiosWrapper.post(registerURL, registerRequest, {
      headers: {
        'X-DES-AK-TENANT-TOKEN': tenantToken
      }
    });
    return { data, status };
  }
}

module.exports = casClass;
