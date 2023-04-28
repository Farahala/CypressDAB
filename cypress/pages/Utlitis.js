class Utlitis{
    // Define a utility function for generating a random integer between min and max
 static  generateRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Define a utility function for generating a random boolean value
  static  generateRandomInteger = (min, max) => {
    generateRandomBoolean = () => {
    return Math.random() < 0.5;
  };
};
static getRandomString(length=10) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  // Define a utility function for generating a random date within a range of days from now
  static generateRandomInteger = (min, max) => {
    generateRandomDate = (days) => {
    const now = new Date();
    const maxDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    const minDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    const randomTimestamp = Math.floor(Math.random() * (maxDate.getTime() - minDate.getTime() + 1)) + minDate.getTime();
    return new Date(randomTimestamp);
  };
};

// Define a utility function for waiting until an element is visible
static waitUntilVisible = (selector, timeout = 5000) => {
    cy.get(selector, { timeout }).should('be.visible');
  };
  
  // Define a utility function for waiting until an element is no longer visible
  static waitUntilNotVisible = (selector, timeout = 5000) => {
    cy.get(selector, { timeout }).should('not.be.visible');
  };
  
  // Define a utility function for waiting until an element exists
  static waitUntilExists = (selector, timeout = 5000) => {
    cy.get(selector, { timeout }).should('exist');
  };
  
  // Define a utility function for waiting until an element does not exist
  static waitUntilNotExists = (selector, timeout = 5000) => {
    cy.get(selector, { timeout }).should('not.exist');
  };


  // Define a utility function for selecting an option from a dropdown
  static selectOption = (selector, optionText) => {
    cy.get(selector).click();
    cy.get(`${selector} option`).contains(optionText).click();
  };
  
  // Define a utility function for checking if an element contains a specific text
  static checkElementContainsText = (selector, text) => {
    cy.get(selector).should('contain', text);
  };
  
  // Define a utility function for scrolling to an element
  static scrollToElement = (selector) => {
    cy.get(selector).scrollIntoView();
  };
  
  // Define a utility function for clearing input field and typing text
  static clearAndType = (selector, text) => {
    cy.get(selector).clear().type(text);
  };


  // Define a utility function for waiting for an element to be visible
  static waitForVisible = (selector, timeout = 5000) => {
    cy.get(selector, { timeout }).should('be.visible');
  };
  
  // Define a utility function for waiting for an element to contain specific text
  static waitForText = (selector, text, timeout = 5000) => {
    cy.get(selector, { timeout }).should('contain', text);
  };
  
  // Define a utility function for checking if an element has a specific class
  static checkElementHasClass = (selector, className) => {
    cy.get(selector).should('have.class', className);
  };
  
  // Define a utility function for checking if an element does not have a specific class
  static checkElementDoesNotHaveClass = (selector, className) => {
    cy.get(selector).should('not.have.class', className);
  };
  
  // Define a utility function for clicking a button and waiting for a new page to load
  static clickAndWaitForPageLoad = (selector, timeout = 5000) => {
    cy.get(selector).click();
    cy.url().should('not.contain', '/login', { timeout });
  };
  
  // Define a utility function for waiting for a specific amount of time
  static wait = (time) => {
    cy.wait(time);
  };

  // Define a utility function for selecting a random item from a list
  static selectRandomItem = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };
  
  // Define a utility function for selecting a random option from a select element
  static selectRandomOption = (selector) => {
    cy.get(selector).then(($select) => {
      const options = $select.find('option');
      const randomOption = selectRandomItem(options);
      const value = randomOption.val();
      cy.get(selector).select(value);
    });
  };
  
  // Define a utility function for filling out a form
  static fillForm = (formSelector, formData) => {
    Object.keys(formData).forEach((fieldName) => {
      const fieldValue = formData[fieldName];
      cy.get(`${formSelector} [name="${fieldName}"]`).type(fieldValue);
    });
  };
  
  // Define a utility function for generating a random email address
  static generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `test-${randomString}@example.com`;
  };


  // Define a utility function for waiting for an element to have a specific text
  static waitForText = (selector, text) => {
    cy.get(selector).should('contain', text);
  };
  
  // Define a utility function for waiting for an element to be visible
  static waitForVisible = (selector) => {
    cy.get(selector).should('be.visible');
  };
  
  // Define a utility function for waiting for an element to not be visible
  static waitForNotVisible = (selector) => {
    cy.get(selector).should('not.be.visible');
  };
  
  // Define a utility function for waiting for an element to exist
  static waitForExist = (selector) => {
    cy.get(selector).should('exist');
  };
  
  // Define a utility function for waiting for an element to not exist
  static waitForNotExist = (selector) => {
    cy.get(selector).should('not.exist');
  };


  static readFromFile(filename) {
    return cy.readFile(filename);
  }

  static writeToFile(filename, data) {
    const fs = require('fs');
    return new Promise((resolve, reject) => {
      fs.writeFile(filename, data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  
  static appendToFile(filename, data) {
    const fs = require('fs');
    return new Promise((resolve, reject) => {
      fs.appendFile(filename, data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  
  static deleteFile(filename) {
    const fs = require('fs');
    return new Promise((resolve, reject) => {
      fs.unlink(filename, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

}
export default Utlitis;