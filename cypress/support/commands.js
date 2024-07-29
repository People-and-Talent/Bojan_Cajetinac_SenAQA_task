
import { loginPageSelectors } from '../e2e/objects/loginPage.obj';

Cypress.Commands.add('login', (username, password) => {
  cy.visit('');
  cy.get(loginPageSelectors.emailField).type(username);
  cy.get(loginPageSelectors.passwordField).type(password);
  cy.get(loginPageSelectors.loginButton).click();
});


Cypress.Commands.add('loginAPI', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'users/login',
    body: {
      email,
      password
    },
    failOnStatusCode: false
  }).then((response) => {
    // Check if the response is successful and contains a token
    if (response.status === 200 && response.body.token) {
      // Save the token to Cypress's environment variables
      Cypress.env('authToken', response.body.token);
    } else {
      throw new Error('Login failed: ' + response.body.error);
    }
  });
});

