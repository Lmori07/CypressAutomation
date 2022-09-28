const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'i9nzb8',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here******* HERE is where PLUGIN GOES*********
    },
    specPattern: "cypress/e2e/*.spec.cy.js",
  },
});
