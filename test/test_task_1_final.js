const assert = require('assert');
const getArrSumEqGoalNumb = require('../task_1_final');

describe('getArrSumEqGoalNumb', function() {
  it('should return an array of two indices whose values sum to the goal number', function() {
    let numbArray = [3, 2, 3, 5];
    let goalNumber = 7;
    let result = getArrSumEqGoalNumb(numbArray, goalNumber);
    // assert.isArray(result);
    // assert.lengthOf(result, 2);
    // assert.deepEqual(result, [0, 3]);
  });

  it('[N] should return an empty array if no two numbers in the array sum to the goal number', function() {
    let numbArray = [1, 2, 3, 4];
    let goalNumber = 7;
    let result = getArrSumEqGoalNumb(numbArray, goalNumber);
    // assert.isArray(result);
    assert.lengthOf(result, 0);
  });
});