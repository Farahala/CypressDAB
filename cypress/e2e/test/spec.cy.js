import RandomGenerator from "../POM/Token gerernation";
import LoginPage from "../POM/loginpage";
import Authenticatepage from "../POM/authenticatepage";

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
    const loginP = new LoginPage();
    cy.visit(Cypress.env('Bt3TestSP'));
    loginP.getloginButton().click();
    const AuthPage = new Authenticatepage();
    //console.log(typeof homePage.getPassword); // function
    //console.log(homePage instanceof Homepage); // true

   // cy.origin('https://xb.pre.idp.vodafone.com', { args: {AutheicPage: AuthPage , username: this.regdata.Email, password: this.regdata.Password } }, ({ AutheicPage,username, password }) => {
        cy.get('#email').type("frahhh");
      
       // console.log("testttttttt"+typeof AutheicPage.getPassword); // function
        cy.get('#current-password').type("hn");
        cy.get('#authenticate').click();
   
     //})

     
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
  
 


