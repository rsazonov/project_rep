const assert = require('assert');
const { login } = require('../CAS/cas');
const testCases = require('../data/test_data_auth_cas');
const getAdminToken = require('../CAS/getAdminToken');
const getTenantToken = require('../CAS/getTenantToken');
const casClass = require('../CAS/cas_class');
const cas = new casClass();

// describe('Login', function() {
//   testCases.forEach(function(testCase) {
//     it(`${testCase.testCaseName}`, async function() {

//       const adminToken = await getAdminToken ();
//       // console.log("adminToken.token: " + JSON.stringify(adminToken.token));
      
//       const tenantToken = await getTenantToken (adminToken.token);
//       // console.log("tenantToken: " + JSON.stringify(tenantToken));
      
//       const response = await login(testCase.email, testCase.password, tenantToken);
//       // console.log("response: " + JSON.stringify(response));
//       assert.strictEqual(response, testCase.expected);
//     });
//   });
// });

describe('Login', function() {
  testCases.forEach(function(testCase) {
    it(`${testCase.testCaseName}`, async function() {

      const adminToken = await getAdminToken ();
      // console.log("adminToken.token: " + JSON.stringify(adminToken.token));
      
      const tenantToken = await getTenantToken (adminToken.token);
      // console.log("tenantToken: " + JSON.stringify(tenantToken));
      
      const response = await cas.login(testCase.email, testCase.password, tenantToken);
      // console.log("response: " + JSON.stringify(response));
      assert.strictEqual(response.status, testCase.expected);
    });
  });
});