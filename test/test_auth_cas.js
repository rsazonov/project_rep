const assert = require('assert');
const login = require('../CAS/auth_cas');
const testCases = require('../data/test_data_auth_cas');

describe('Login', function() {
this.timeout(10000);
  testCases.forEach(function(testCase) {
    it(`${testCase.testCaseName}`, async function() {
      const result = await login(testCase.email, testCase.password);
      assert.strictEqual(result.status, testCase.expected);
    });
  });
});