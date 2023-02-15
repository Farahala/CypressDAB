class Authenticatepage {
    getEmail() {
      return cy.get('#email');
    }
  
    getPassword(){
        return cy.get('#current-password');
    }
    
  
    continueButton() {
      return cy.get('#authenticate');
    }
  }
  
  export default Authenticatepage;
  