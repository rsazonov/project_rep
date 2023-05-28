const assert = require('assert');
const sumNumbArray = require('../task_3_final');
const testCases = require('../data/test_data_3');

describe('sumNumbArray', function() {

  testCases.forEach(function(testCase) {
    it(`${testCase.testCaseName}`, function() {
      const result = sumNumbArray(testCase.numb);
      assert.deepEqual(result, testCase.expected);
    });
  });
});