const assert = require('assert');
const { userRegistr } = require('../CAS/cas');
const testCases = require('../data/test_data_registr_cas');
const ageVerification = require('../AVP/avp');
const defaultAgeVerificationPayload = require('../AVP/requestData/age_verification');
const getAdminToken = require('../CAS/getAdminToken');
const getTenantToken = require('../CAS/getTenantToken');
const casClass = require('../CAS/cas_class');
const cas = new casClass();

// describe('Registration', function() {
//   testCases.forEach(function (testCase) {
//     it(`${testCase.testCaseName}`, async function () {
//       const ageVerificationRequest = { ...defaultAgeVerificationPayload, user_email: testCase.newPayload.email };
//       const response = await ageVerification(ageVerificationRequest);

//       // console.log("ageVerificationRequest: " + JSON.stringify(ageVerificationRequest));
//       // console.log("response: " + JSON.stringify(response));

//       const adminToken = await getAdminToken ();
//       const tenantToken = await getTenantToken (adminToken.token);

//       const newPayload = { ...testCase.newPayload, age_verification_uuid: response.uuid };
//       // console.log("Registration request: " + JSON.stringify(newPayload));
//       const result = await userRegistr(newPayload,tenantToken);

//       // console.log("result: " + result);
//       assert.strictEqual(result, testCase.expected);
//     });
//   });
// });

describe('Registration', function() {
  testCases.forEach(function (testCase) {
    it(`${testCase.testCaseName}`, async function () {
      const ageVerificationRequest = { ...defaultAgeVerificationPayload, user_email: testCase.newPayload.email };
      const response = await ageVerification(ageVerificationRequest);

      // console.log("ageVerificationRequest: " + JSON.stringify(ageVerificationRequest));
      // console.log("response: " + JSON.stringify(response));

      const adminToken = await getAdminToken ();
      const tenantToken = await getTenantToken (adminToken.token);

      const newPayload = { ...testCase.newPayload, age_verification_uuid: response.uuid };
      // console.log("Registration request: " + JSON.stringify(newPayload));
      const result = await cas.userRegistr(newPayload,tenantToken);

      // console.log("result: " + result);
      assert.strictEqual(result.status, testCase.expected);
    });
  });
});