const assert = require('assert');
const sumNumbArray = require('../task_3_final');
let testCaseName;

describe('sumNumbArray', function() {
  const testCases = [
    {
      testCaseName: "should return the sum of digits until it becomes a single-digit number",
      numb: 658,
      expected: 1
    },
    {
      testCaseName: "should return the sum of digits until it becomes a single-digit number",  
      numb: 9,
      expected: 9
    },
    {
      testCaseName: "should return the sum of digits until it becomes a single-digit number (large number)",
      numb: 987654321,
      expected: 9
    },
    {
      testCaseName: "should return the sum of digits until it becomes a single-digit number (decimal number)",
      numb: 0.1,
      expected: 0
    }
  ];

  testCases.forEach(function(testCase) {
    it(`${testCase.testCaseName}`, function() {
      const result = sumNumbArray(testCase.numb);
      assert.strictEqual(result, testCase.expected);
    });
  });
});