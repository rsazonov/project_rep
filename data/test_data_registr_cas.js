module.exports = [
    {
      testCaseName: "should register a new user",
      newPayload: {
        "email": "rostyslav.sazonov+stg_auto_new_" + `${new Date().getTime()}` + "@gmail.com",
      },
      expected: 200
    },
    {
      testCaseName: "should return an error for exiting user",
      newPayload: {
        "email": "rostyslav.sazonov+fe2_qa_52@gmail.com",
      },
      expected: 422
    }
  ];