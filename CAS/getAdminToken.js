const axiosWrapper = require('../Library/axios_wrapper');
const adminLoginURL = 'https://apim-msfwex17-23-domainapim-stg.azure-api.net/des-services/cas/v1/admin/login';

async function getAdminToken(username, password) {
  const {data, status} = await axiosWrapper.post(adminLoginURL, 
          {
            username: "rostyslav.sazonov@intellias.com",
            password: "MLb3950FAtU4*"
          });
  // console.log(data, status);
  return (data);
}

  // ;(async () => {
  //   const { data, status } = await getAdminToken("rostyslav.sazonov@intellias.com", "MLb3950FAtU4*")
  // })()

  module.exports = getAdminToken;