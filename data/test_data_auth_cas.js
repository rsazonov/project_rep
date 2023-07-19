module.exports = [
    {
      testCaseName: "should return a response with status 200 for valid email and password",
      email: "rostyslav.sazonov+fe2_qa_51@gmail.com",
      password: "MLb3950FAtU4!",
      expected: 200
    },
    {
      testCaseName: "should return a response with status 422 for valid email and invalid password",  
      email: "rostyslav.sazonov+fe1_trial_91@gmail.com",
      password: "MLb3950FAtU4",
      expected: 422
    },
    {
      testCaseName: "should return a response with status 422 for invalid email and valid password",  
      email: "rostyslav.sazonov+fe1_trial_9100@gmail.com",
      password: "MLb3950FAtU4!",
      expected: 422
    },
    {
      testCaseName: "should return a response with status 422 for valid email and blank password",  
      email: "rostyslav.sazonov+fe1_trial_91@gmail.com",
      password: "",
      expected: 422
    },
    {
      testCaseName: "should return a response with status 422 for blank email and valid password",  
      email: "",
      password: "MLb3950FAtU4!",
      expected: 422
    },
    {
      testCaseName: "should return a response with status 422 when user doesn't exist",  
      email: "rostyslav.sazonov+fe1_trial_9100@gmail.com",
      password: "MLb3950FAtU4",
      expected: 422
    }
  ];