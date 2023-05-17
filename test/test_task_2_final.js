const assert = require('assert');
const calcSumSqMaxNumb = require('../task_2_final');
let testCaseName;

describe('calcSumSqMaxNumb', function() {
  const testCases = [
    {
      testCaseName: "should return the sum of squares of the two largest numbers",
      a: 10,
      b: 6,
      c: 11,
      expected: 221
    },
    {
      testCaseName: "should return the sum of squares of the two largest numbers (negative numbers",
      a: -10,
      b: -6,
      c: -11,
      expected: 136
    },
    {
      testCaseName: "should return the sum of squares of the two largest numbers (decimal numbers)",
      a: 2.5,
      b: 1.7,
      c: 3.9,
      expected: 21.46
    },
    {
      testCaseName: "should return the sum of squares of the two largest numbers (two numbers are the same)",
      a: 5,
      b: 5,
      c: 4,
      expected: 50
    }
  ];

  testCases.forEach(function(testCase) {
    it(`${testCase.testCaseName}`, function() {
      const result = calcSumSqMaxNumb(testCase.a, testCase.b, testCase.c);
      assert.deepEqual(result, testCase.expected);
    });
  });
});