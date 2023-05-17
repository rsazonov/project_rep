const assert = require('assert');
const getArrSumEqGoalNumb = require('../task_1_final');
let testCaseName;

describe('getArrSumEqGoalNumb', function() {
  const testCases = [
    {
      testCaseName: "should return an array with two indices whose values sum is equal to the goal number",
      numbArray: [3, 2, 3, 5],
      goalNumber: 7,
      expected: [1, 3]
    },
    {
      testCaseName: "should return an array with ONLY two indices whose values sum is equal to the goal number (the array contains two satisfied value pairs)",  
      numbArray: [3, 4, 7, 0],
      goalNumber: 7,
      expected: [0, 1]
    },
    {
      testCaseName: "[N] should return an empty array if there are no two values in the array whose values sum is equal to the goal number",
      numbArray: [1, 2, 3, 3],
      goalNumber: 7,
      expected: []
    },
    {
      testCaseName: "should return an array with two indices whose values sum is equal to the goal number (the array contains negative values)",
      numbArray: [3, -2, 4, -5],
      goalNumber: 7,
      expected: [0, 2]
    },
    {
      testCaseName: "should return an array with two indices whose values sum is equal to the goal number (the array contains float values)",
      numbArray: [3.1, 2, 3.9, 5],
      goalNumber: 7,
      expected: [0, 2]
    },
    {
      testCaseName: "[N] should return an empty array if the initial array is empty",
      numbArray: [],
      goalNumber: 7,
      expected: []
    },
    {
      testCaseName: "[N] should return an empty array if the goal number is empty",
      numbArray: [3, 2, 3, 5],
      goalNumber: undefined,
      expected: []
    }
  ];

  testCases.forEach(function(testCase) {
    it(`${testCase.testCaseName}`, function() {
      const result = getArrSumEqGoalNumb(testCase.numbArray, testCase.goalNumber);
      assert.deepEqual(result, testCase.expected);
    });
  });
});