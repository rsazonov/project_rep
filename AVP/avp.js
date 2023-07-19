const axiosWrapper = require('../Library/axios_wrapper');
const defaultAgeVerificationPayload = require('../AVP/requestData/age_verification');
const verifyURL = 'https://apim-msfwex17-23-domainapim-qa.azure-api.net/des-services/avp/v1/verify';
const tenantToken = '7e703561de83b8193d2dd22a7084f39dbfbc26c15f7a994007af4da4d1970e22';

async function ageVerification(ageVerificationRequest) {    
  
  const {data, status} = await axiosWrapper.post(verifyURL, ageVerificationRequest, {
    headers: {
      'X-DES-AK-TENANT-TOKEN': tenantToken
    }
  });
  // console.log(data, status);
  // console.log(data.uuid, status);
  // return (data, status);
  return (data);
}


// (async () => {
//     const ageVerificationRequest = {... defaultAgeVerificationPayload};
//     ageVerificationRequest.email = "rostyslav.sazonov+fe1_auto_new_13@gmail.com";
//     const response = await ageVerification(ageVerificationRequest);
// })();

module.exports = ageVerification;

//область видимости и замыкание