class EnvLoginpage {
    elements = {
        loginButton: () => cy.get(".Login_loginPage__O2VC2 > .MuiButtonBase-root")
      };
    

getloginButton() {
    
    return this.elements.loginButton();
}

}
export const envLoginpage = new EnvLoginpage();