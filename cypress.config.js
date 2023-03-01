const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  env: {
    // Bt3TestUAM: 'https://uam-fe-bt3-test.digital-asset-broker.com/',
    Bt3TestSP:"https://support-bt3-test.digital-asset-broker.com/login"
  },
  e2e: {
    setupNodeEvents(on, config) {
      const options = webpackPreprocessor.defaultOptions;
      options.webpackOptions.module.rules.push({
        test: /\.feature$/,
        use: [
          { loader: 'cypress-cucumber-preprocessor/lib/featuresLoader' }
        ]
      });

      on('file:preprocessor', webpackPreprocessor(options));
      on('file:preprocessor', cucumber());
    },
    experimentalStudio: true,
    experimentalInteractiveRunEvents: true,
    experimentalNetworkStubbing: true,
    experimentalSourceRewriting: true,
    experimentalShadowDomSupport: true,
    experimentalFetchPolyfill: true,
    defaultCommandTimeout: 10000,
    //specPattern:"cypress/e2e/**/*.feature",
    //specPattern: "cypress/e2e/test"
    //step_definitions: "cypress/step_definitions/**/*.js"
      
   specPattern:"cypress/e2e/test/*.cy.js",
  }
});
