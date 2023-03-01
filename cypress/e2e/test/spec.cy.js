import RandomGenerator from "../POM/Token gerernation";
import LoginPage from "../POM/loginpage";
import Authenticatepage from "../POM/authenticatepage";
import { Given } from "./login";

//describe('API Test', () => {
 
 before(() => {
  const RandomG = new RandomGenerator();
    // generate a random 
    RandomG.addRandom();
    });
  //});

  let AccountID;
  let GETresponseBody ;
 /*it('should post data from a file', () => {
    cy.fixture('example.json').then(data => {
      cy.request({
        method: 'POST',
        url: 'https://bt3-test.digital-asset-broker.com/dab-service/auth/accounts',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYXJhaC5hbGFhQHZvZGFmb25lLmNvbSIsImlzcyI6IjkzMjMwNDcwLTM4ZmYtNGU1MC05ZDQwLWMzNjVmYjIzYjI0ZSIsInR5cCI6IkpXVCIsImV4cCI6MTY3NTg2NjQ1MiwidXNlcklkIjoiNTYzMGQzYTktMWYxNS00MWRiLWIxMzEtODk1OTFmNDg3OTMxIiwiaWF0IjoxNjc1NzgwMDUyfQ.KFIgLltXoVhGaGvK_wScjPDLcLWVLKLYgOEdyOaU-EX_-Bd68XCpG_JgZI_gMeYtSK0AD1BrDAWDqyyKlLZxWg',
                  'vf-apix-app-id': 'nbxje8cD6Cn2AD0GSDqGYsyTo4CHRQgH'
              },
        body: data
      }).then ((res)=>{
        AccountID=res.body.dabAccountId;
        console.log(AccountID);
      })
      .its('status')
      .should('equal', 201)
    })
  })
  it('should get data from a file by ID ', () => {
  
      cy.request({
        method: 'Get',
        url: `https://bt3-test.digital-asset-broker.com/dab-service/auth/accounts/${AccountID}`,
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYXJhaC5hbGFhQHZvZGFmb25lLmNvbSIsImlzcyI6IjkzMjMwNDcwLTM4ZmYtNGU1MC05ZDQwLWMzNjVmYjIzYjI0ZSIsInR5cCI6IkpXVCIsImV4cCI6MTY3NTg2NjQ1MiwidXNlcklkIjoiNTYzMGQzYTktMWYxNS00MWRiLWIxMzEtODk1OTFmNDg3OTMxIiwiaWF0IjoxNjc1NzgwMDUyfQ.KFIgLltXoVhGaGvK_wScjPDLcLWVLKLYgOEdyOaU-EX_-Bd68XCpG_JgZI_gMeYtSK0AD1BrDAWDqyyKlLZxWg',
                  'x-jws-signature': `${AccountID}`
              },
      })
      .then((response) => {
        // access the response body
         GETresponseBody = response.body;
      
        // assert on response body
      console.log(GETresponseBody.name);
      
      })
      
    
  })  */


  // test case
  beforeEach(() => {
    
   cy.fixture('loginData').then(function(regdata){
    this.regdata=regdata
 })
    
  })
  it('Loginpage', function () {

    const loginPage = new LoginPage();

    cy.visit(Cypress.env('Bt3TestSP'));
    loginPage.getloginButton().click();
    const authenticatePage = new Authenticatepage('https://xb.pre.idp.vodafone.com')
     console.log(typeof this.regdata.Email);
        authenticatePage.getEmail(this.regdata.Email)
        authenticatePage.getPassword(this.regdata.Password)
        authenticatePage.continueButton()
   
    cy.get('.Loading_label__sVQXv').should('exist')
     cy.wait(40000);
          cy.get('#\\:rc\\:').should('exist')
          .then(() => {
          cy.wait(40000);
           
            cy.get('#\\:rc\\:').type(GETresponseBody.name)
            cy.get('#\\:rc\\:-option-0').click();
            
        })
        cy.get('.AccountSelection_autocomplete__AUBTC > .MuiButton-root').click();
        
   
  }); 
  
 


