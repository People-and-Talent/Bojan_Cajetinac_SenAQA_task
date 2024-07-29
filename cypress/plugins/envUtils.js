// cypress/envUtils.js

function getBaseUrl(environment) {
    if (environment === 'prod') {
      return 'https://thinking-tester-contact-list.herokuapp.com/';
    }
    if (environment === 'stg') {
      return 'https://www.charactercountonline.com/'; //adjust URL
    }
    throw new Error(`Unsupported environment '${environment}'`);
  }
  
  function userCredentials(environment) {
    if (environment === 'prod') {
      return {
        email: 'proba@gmail.com',
        password: 'Test2#3@',
      };
    }
    if (environment === 'stg') {
      return {
        email: 'stguser@example.com',    //adjust user
        password: 'Testtest',
      };
    }
    throw new Error(`Unsupported environment '${environment}'`);
  }
  
  module.exports = { getBaseUrl, userCredentials };
  