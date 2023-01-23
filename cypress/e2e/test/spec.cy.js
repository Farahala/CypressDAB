import RandomGenerator from "../../support/POM/Token gerernation";
describe('API Test', () => {
  const RandomG = new RandomGenerator();
  beforeEach(() => {
    // generate a random 
    RandomG.addRandom();
  });
  let AccountID;
  it('should post data from a file', () => {
    cy.fixture('example.json').then(data => {
      cy.request({
        method: 'POST',
        url: 'https://bt3-test.digital-asset-broker.com/dab-service/auth/accounts',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYXJhaC5hbGFhQHZvZGFmb25lLmNvbSIsImlzcyI6IjkzMjMwNDcwLTM4ZmYtNGU1MC05ZDQwLWMzNjVmYjIzYjI0ZSIsInR5cCI6IkpXVCIsImV4cCI6MTY3NDI5MDA4MSwidXNlcklkIjoiNTYzMGQzYTktMWYxNS00MWRiLWIxMzEtODk1OTFmNDg3OTMxIiwiaWF0IjoxNjc0MjAzNjgxfQ.Nht9-icwkqdPIn1HqLKCdcS-biTUfEQaqq5uM57bs_3u3JONEH5gBw-3PMA6ePo8ALo7FDVjHegPuyb70MmEZg',
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
                  'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmYXJhaC5hbGFhQHZvZGFmb25lLmNvbSIsImlzcyI6IjkzMjMwNDcwLTM4ZmYtNGU1MC05ZDQwLWMzNjVmYjIzYjI0ZSIsInR5cCI6IkpXVCIsImV4cCI6MTY3NDI5MDA4MSwidXNlcklkIjoiNTYzMGQzYTktMWYxNS00MWRiLWIxMzEtODk1OTFmNDg3OTMxIiwiaWF0IjoxNjc0MjAzNjgxfQ.Nht9-icwkqdPIn1HqLKCdcS-biTUfEQaqq5uM57bs_3u3JONEH5gBw-3PMA6ePo8ALo7FDVjHegPuyb70MmEZg',
                  'x-jws-signature': `${AccountID}`
              },
      })
      .its('status')
      .should('equal', 200)
    
  })
})

