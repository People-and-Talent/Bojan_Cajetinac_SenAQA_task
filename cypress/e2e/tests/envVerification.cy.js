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

  it('should visit page with proper configuration', () => {
    cy.visit('');
  });

});
