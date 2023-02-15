const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    Bt3TestUAM: 'https://uam-fe-bt3-test.digital-asset-broker.com/',
    Bt3TestSP:"https://support-bt3-test.digital-asset-broker.com/login"

  },
  e2e: {
    setupNodeEvents(on, config) {
     // const cucumber = require('cypress-cucumber-preprocessor').default
     // const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
    
      module.exports = (on, config) => {
        //on('file:preprocessor', preprocessor())
      }
    
    },
    //experimentalStudio: true,
    experimentalOriginDependencies: true
  //  specPattern:"CypressDAB\\cypress\\e2e\\test\\Login.feature",
   
  },
  
   
  
  
});
