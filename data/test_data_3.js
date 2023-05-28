module.exports = [
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