// cypress/e2e/tests/login.cy.js

describe('API Login Tests', () => {
    const loginUrl = 'https://thinking-tester-contact-list.herokuapp.com/users/login';

    before(() => {
        // Load fixture data
        cy.fixture('users').as('credentials');
    });

    it('should successfully log in with valid credentials and receive token', function () {
        const { standardUser } = this.credentials;
        cy.request({
            method: 'POST',
            url: loginUrl,
            body: standardUser,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('user');
            expect(response.body.user).to.have.all.keys('_id', 'firstName', 'lastName', 'email', '__v');
            expect(response.body).to.have.property('token').that.is.a('string');
            expect(response.body.user.email).to.eq(standardUser.email);
            expect(response.body.user.firstName).to.eq('user_test1');
            expect(response.body.user.lastName).to.eq('bojan');
        });
    });

    it('should return an error for invalid credentials', function () {
        cy.request({
            method: 'POST',
            url: loginUrl,
            body: {
                email: 'random@gmail.com',
                password: 'asdad'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('should return an error when email is empty', function () {
        cy.request({
            method: 'POST',
            url: loginUrl,
            body: {
                email: '',
                password: 'password'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('should return an error when password is empty', function () {
        cy.request({
            method: 'POST',
            url: loginUrl,
            body: {
                email: 'email',
                password: ''
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('should return an error when both email and password are empty', function () {
        cy.request({
            method: 'POST',
            url: loginUrl,
            body: {
                email: '',
                password: ''
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('should handle special characters in email and password', function () {
        cy.request({
            method: 'POST',
            url: loginUrl,
            body: {
                email: "' OR 1=1 --",
                password: "anything"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });

    it('should handle very long email and password', function () {
        const longString = 'a'.repeat(256);
        cy.request({
            method: 'POST',
            url: loginUrl,
            body: {
                email: longString,
                password: longString
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });
});