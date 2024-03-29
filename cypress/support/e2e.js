// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin';
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

    Cypress.on('fail', (error, runnable) => {

        if (!error.message.includes('Timed out retrying after 4000ms: Expected to find element')) {
        
         throw error
        
        }
        
    })
Cypress.on('uncaught:exception', (err, runnable) => {
    if(err.message.includes('Unexpected token')){
            console.log('Application Error Javascript Token')
            return false;
         }
             return true
         })