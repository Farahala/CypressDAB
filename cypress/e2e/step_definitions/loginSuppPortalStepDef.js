import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { envLoginpage } from "@pages/EnvLoginpage";
  import { Auth } from "@pages/authenticatepage";
  
  Given("I navigate to supportportal", () => {
    cy.visit(Cypress.env('Bt3DevSP'));
    cy.wait(5000);
  });
  
  Given("i click on Environment login button", () => {
    cy.wait(5000);
    envLoginpage.getloginButton().click();
  // cy.get('.Login_loginPage__O2VC2 > .MuiButtonBase-root').click();
    
  });
  // Given("I do the Login with my user by entering email address as and password", (table) => {
  //   table.hashes().forEach((row) => {
  //       cy.log(row.email);
  //       cy.log(row.password);
  //     //  const Auth = new Authenticatepage('https://bt3dev.auth.eu-west-2.amazoncognito.com/login')
  //       Auth.getEmail().type(row.email,{force: true});
  //       Auth.getPassword().type(row.password,{force: true});
  //       Auth.continueButton().click();
  //     });
    
  // });
  

 //   cy.get('.Login_loginPage__O2VC2 > .MuiButtonBase-root').click();
 Given("I do the Login with my user by entering email {string} address as and password {string}", (email ,passowrd ) => {
  
     Auth.getEmail().type(email,{force: true});
      Auth.getPassword().type(passowrd,{force: true});
      Auth.continueButton().click();
  
  });
