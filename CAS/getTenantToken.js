const axiosWrapper = require('../Library/axios_wrapper');
const casAdminEnvURL = 'https://apim-msfwex17-23-domainapim-stg.azure-api.net/des-services/cas/v1/admin/environments';
// const getAdminToken = require('../CAS/getAdminToken.js');
const envCode = "ploom-validation-stage-env";


async function getTenantToken(adminToken) {
  const {data, status} = await axiosWrapper.get(casAdminEnvURL,
    {
      headers: {
        'X-DES-AK-ADMIN-TOKEN': adminToken
      }
    });
  // return (data, status);
  // console.log(data.find((item) => item.code === envCode));
  // console.log(data.find((item) => item.code === envCode).access_token);
  return data.find((item) => item.code === envCode).access_token;
}

  // ;(async () => {
  //   const { data, status } = await getTenantToken("102bakQ7_L3RM6J4CAxW7UyUg")
  // })()
  
  module.exports = getTenantToken;