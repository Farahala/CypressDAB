class Authenticatepage {
  constructor(url) {
    this.url = url;
  }

  getEmail(email) {
    console.log(email);
    console.log(typeof email);
    return cy.origin(this.url, { args: [email] }, (email) => {
      return cy.get('#email', { timeout: 40000 }).type(email.toString());
    });
  }
  
  getPassword(Password) {
    return cy.origin(this.url, {args: [Password]} ,(Password) => {
      return cy.get('#current-password').type(Password.toString());
    });
  }

  continueButton() {
    return cy.origin(this.url, () => {
      return cy.get('#authenticate').click();
    });
  }
}

export default Authenticatepage;
