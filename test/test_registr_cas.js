const assert = require('assert');
const { userRegistr } = require('../CAS/cas');
const testCases = require('../data/test_data_registr_cas');
const ageVerification = require('../AVP/avp');
const defaultAgeVerificationPayload = require('../AVP/requestData/age_verification');

describe('Registration', function() {
  testCases.forEach(function (testCase) {
    it(`${testCase.testCaseName}`, async function () {
      const ageVerificationRequest = { ...defaultAgeVerificationPayload, user_email: testCase.newPayload.email };
      const response = await ageVerification(ageVerificationRequest);

      // console.log("ageVerificationRequest: " + JSON.stringify(ageVerificationRequest));
      // console.log("response: " + JSON.stringify(response));

      const newPayload = { ...testCase.newPayload, age_verification_uuid: response.uuid };
      // console.log("Registration request: " + JSON.stringify(newPayload));
      const result = await userRegistr(newPayload);

      // console.log("result: " + result);
      assert.strictEqual(result, testCase.expected);
    });
  });
});