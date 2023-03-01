import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//import LoginPage from '../POM/loginpage';

//const loginPage = new LoginPage();
//const authenticatePage = new Authenticatepage('https://xb.pre.idp.vodafone.com');

Given('I am on the support portal login page', () => {
    cy.log(
    cy.visit('https://support-bt3-test.digital-asset-broker.com/login'));
  });

/* When('I enter my email and password', (dataTable) => {
  //const { Email, Password } = dataTable.rowsHash();
 // authenticatePage.getEmail(Email);
 // authenticatePage.getPassword(Password);
 // authenticatePage.continueButton();
});
And ('I click the login button',()=>{

});

Then('I should be logged in to the portal', () => {
 // cy.url().should('include', '/dashboard');
});
 */
export { Given };