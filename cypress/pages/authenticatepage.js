class Authenticatepage {
  elements = {
    email: () => cy.get("#signInFormUsername"),
    passowrd: () => cy.get("#signInFormPassword"),
    continueButton: () => cy.get('input[name="signInSubmitButton"][type="Submit"]')    
  };

  // constructor() {
  //   this.url = 'https://bt3dev.auth.eu-west-2.amazoncognito.com/login';
  // }
  getEmail() {
   // console.log(email);
    //console.log(typeof email);
    // return cy.origin('https://bt3dev.auth.eu-west-2.amazoncognito.com/login', { args: [email] }, (email) => {
    //  console.log('the email is .........../..............'+email);
    return this.elements.email();
  //  });
  }
  
  getPassword() {
  //  return cy.origin('https://bt3dev.auth.eu-west-2.amazoncognito.com/login', {args: [Password]} ,(Password) => {
      return this.elements.passowrd();
 //   });
  }
    
  
    continueButton() {
      return this.elements.continueButton().filter(':visible');
    }
  }
  
  export const  Auth = new Authenticatepage();
  