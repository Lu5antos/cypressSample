const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    baseUrl: 'https://automationteststore.com/',
    env: {
      automation_store: 'https://automationteststore.com/',
    }
  },

});
