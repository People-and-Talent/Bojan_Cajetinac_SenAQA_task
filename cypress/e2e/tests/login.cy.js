import { loginPageSelectors } from '../objects/loginPage.obj';
import { homePageSelectors } from '../objects/homePage.obj';

describe('Login Feature Tests', () => {
  let standardUser, invalidUser;
  before(() => {
    cy.fixture('users').then((users) => {
      standardUser = users.standardUser;
      invalidUser = users.invalidUser;
    });
  });

  it('should login successfully with valid credentials', () => {
    cy.visit('');
    cy.get(loginPageSelectors.emailField)
      .should('have.attr', 'placeholder', 'Email')
      .type(standardUser.email)
    cy.get(loginPageSelectors.passwordField)
      .should('have.attr', 'type', 'password')
      .should('have.attr', 'placeholder', 'Password')
      .type(standardUser.password);
    cy.get(loginPageSelectors.loginButton).click();
    // Verify successful login
    cy.url().should('include', '/contactList');
    cy.get(homePageSelectors.logoutButton).should('be.visible');
    cy.getCookie('token').should('exist').and('not.be.empty');
  });

  it('should display an error with invalid credentials', () => {
    cy.login(invalidUser.email, invalidUser.password);
    // Verify error message
    cy.get(loginPageSelectors.errorMessage)
      .should('have.text', 'Incorrect username or password');
    cy.login(standardUser.email, invalidUser.password);
    // Verify error message
    cy.get(loginPageSelectors.errorMessage)
      .should('have.text', 'Incorrect username or password');
      cy.getCookie('token').should('not.exist');
  });

  it.only('should display an error for empty email and password', () => {
    cy.visit('');
    cy.get(loginPageSelectors.loginButton).click();
    // Verify error message
    cy.get(loginPageSelectors.errorMessage)
      .should('have.text', 'Incorrect username or password');
  });

  it('should handle very long username and password', () => {
    const longString = 'a'.repeat(256); // Adjust length as needed
    cy.login(longString, longString);
    // Add assertions to verify handling of long inputs
    cy.get(loginPageSelectors.errorMessage)
      .should('have.text', 'Incorrect username or password');
  });
  
});
