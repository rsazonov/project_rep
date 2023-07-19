const axiosWrapper = require('../Library/axios_wrapper');
const defaultPayload = require('../CAS/requestData/registration');
const defaultAgeVerificationPayload = require('../AVP/requestData/age_verification');
const loginURL = 'https://apim-msfwex17-23-domainapim-qa.azure-api.net/des-services/cas/v1/login';
const registerURL = 'https://apim-msfwex17-23-domainapim-qa.azure-api.net/des-services/cas/v1/register';
const tenantToken = '7e703561de83b8193d2dd22a7084f39dbfbc26c15f7a994007af4da4d1970e25';

//Login User
async function login(email, password) {
  const {data, status} = await axiosWrapper.post(loginURL, 
          {
            email: email,
            password: password
          }, 
          {
            headers: {
              'X-DES-AK-TENANT-TOKEN': tenantToken
            }
          });
  // console.log(data, status);
  return (data, status);
}
   
  // ;(async () => {
  //   const { data, status, headers } = await login("rostyslav.sazonov+fe2_qa_51@gmail.com", "MLb3950FAtU4!")
  // })()
  
  //Register User
  
  async function userRegistr(newPayload) {
  
    // const ageVerificationRequest = { ...defaultAgeVerificationPayload, ...newPayload };
  
    // const ageVerificationUUID = await axiosWrapper.post('https://apim-msfwex17-23-domainapim-qa.azure-api.net/des-services/avp/v1/verify', ageVerificationRequest, {
    //   headers: {
    //     'X-DES-AK-TENANT-TOKEN': '7e703561de83b8193d2dd22a7084f39dbfbc26c15f7a994007af4da4d1970e22'
    //   }
    // });
    // console.log(ageVerificationUUID.data.uuid);
    
    // newPayload.age_verification_uuid = ageVerificationUUID.data.uuid;
  
    const registerRequest = { ...defaultPayload, ...newPayload };
  
    const {data, status} = await axiosWrapper.post(registerURL, registerRequest, {
        headers: {
          'X-DES-AK-TENANT-TOKEN': tenantToken
        }
    });
    // console.log(data, status);
    return (data, status);
  }
  
      // (async () => {
      //   const newPayload = {
      //     email: "rostyslav.sazonov+fe1_auto_new_13@gmail.com"
      // };
      
      //   const response = await userRegistr(newPayload);
  
      // })();
  

    module.exports = {
      login: login,
      userRegistr: userRegistr
    };