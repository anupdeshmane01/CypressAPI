const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  e2e: {
    retries:2,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
