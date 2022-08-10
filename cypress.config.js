const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here******* HERE is where PLUGIN GOES*********
    },
    specPattern: "cypress/e2e/*.spec.cy.js",
  },
});
