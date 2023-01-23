const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    Bt3TestUAM: 'https://uam-fe-bt3-test.digital-asset-broker.com/',
    Bt3TestSP:"https://support-bt3-test.digital-asset-broker.com/login"

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
