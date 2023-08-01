const axiosWrapper = require('../Library/axios_wrapper');
const defaultAgeVerificationPayload = require('../AVP/requestData/age_verification');
const verifyURL = 'https://apim-msfwex17-23-domainapim-stg.azure-api.net/des-services/avp/v1/verify';
const tenantToken = '64fae1fc79ff46baa54a5eca79971c8f400baba964cdb09937d9b34e21c6afa4';

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