const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
