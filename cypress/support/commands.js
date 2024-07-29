
import { loginPageSelectors } from '../e2e/objects/loginPage.obj';

Cypress.Commands.add('login', (username, password) => {
  cy.visit('');
  cy.get(loginPageSelectors.emailField).type(username);
  cy.get(loginPageSelectors.passwordField).type(password);
  cy.get(loginPageSelectors.loginButton).click();
});
