const assert = require('assert');
const getArrSumEqGoalNumb = require('../task_1_final');

describe('getArrSumEqGoalNumb', function() {
  it('Verify the returned array contains two indices whose values sum is equal to the goal number', function() {
    let numbArray = [3, 2, 3, 5];
    let goalNumber = 7;
    let result = getArrSumEqGoalNumb(numbArray, goalNumber);
    let expected = [1, 3];
    assert.deepEqual(result,expected)
  });

  it('[N] Verify the returned array is empty if there are no two values in the array sum is equal to the goal number', function() {
    let numbArray = [1, 2, 3, 3];
    let goalNumber = 7;
    let result = getArrSumEqGoalNumb(numbArray, goalNumber);
    let expected = [];
    assert.deepEqual(result,expected)
  });

  it('Verify the returned array contains two indices whose values sum is equal to the goal number (the array contains negative values)', function() {
    let numbArray = [3, -2, 4, -5];
    let goalNumber = 7;
    let result = getArrSumEqGoalNumb(numbArray, goalNumber);
    let expected = [0, 2];
    assert.deepEqual(result,expected)
  });

  it('Verify the returned array contains two indices whose values sum is equal to the goal number', function() {
    let numbArray = [3, 2, 3, 5];
    let goalNumber = 7;
    let result = getArrSumEqGoalNumb(numbArray, goalNumber);
    let expected = [1, 3];
    assert.deepEqual(result,expected)
  });

  it('[N] Verify the returned array is empty if the initial array is empty', function() {
    let numbArray = [];
    let goalNumber = 7;
    let result = getArrSumEqGoalNumb(numbArray, goalNumber);
    let expected = [];
    assert.deepEqual(result,expected)
  });

  it('[N] Verify the returned array is empty if the goal number is empty', function() {
    let numbArray = [3, 2, 3, 5];
    let goalNumber;
    let result = getArrSumEqGoalNumb(numbArray, goalNumber);
    let expected = [];
    assert.deepEqual(result,expected)
  });
});