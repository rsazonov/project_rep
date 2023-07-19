const assert = require('assert');
const { login } = require('../CAS/cas');
const testCases = require('../data/test_data_auth_cas');

describe('Login', function() {
  testCases.forEach(function(testCase) {
    it(`${testCase.testCaseName}`, async function() {
      const response = await login(testCase.email, testCase.password);
      assert.strictEqual(response, testCase.expected);
    });
  });
});