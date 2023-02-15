class RandomGenerator {
    addRandom() {
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        // create a unique test name
        const name = `testname${id}`
       // console.log(name)
         // create a unique id string
         const alternativeIds = `dab:organisation:test${id}`
         //console.log(alternativeIds)
      
        // read the existing file
        cy.fixture('example.json').then(data => {
            data.name =name
             data.alternativeIds = [alternativeIds]
            // write the updated data to the file
            cy.writeFile('cypress/fixtures/example.json', data);
        });
    }
  }
  
  export default  RandomGenerator;
  