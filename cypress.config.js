const { defineConfig } = require('cypress');
const { getBaseUrl, userCredentials } = require('./cypress/plugins/envUtils.js');

module.exports = defineConfig({
  env: {
    market: 'prod', // stg or prod
  },
  e2e: {
    async setupNodeEvents(on, config) {
      const baseUrl = await getBaseUrl(config.env.market);
      config.baseUrl = baseUrl;
      
      const credentials = await userCredentials(config.env.market);
      return Object.assign(config, credentials);
    },
  },
});
