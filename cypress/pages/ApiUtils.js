class ApiUtils {
  // Makes an HTTP GET request to the specified URL and returns the response body
  static get(url) {
    return cy.request({
      method: 'GET',
      url: url,
      failOnStatusCode: false
    }).then(response => {
      return response.body;
    });
  }

  // Makes an HTTP POST request to the specified URL with the specified data and returns the response body
  static post(url, data) {
    return cy.request({
      method: 'POST',
      url: url,
      body: data,
      failOnStatusCode: false
    }).then(response => {
      return response.body;
    });
  }

  // Makes an HTTP PUT request to the specified URL with the specified data and returns the response body
  static put(url, data) {
    return cy.request({
      method: 'PUT',
      url: url,
      body: data,
      failOnStatusCode: false
    }).then(response => {
      return response.body;
    });
  }

  // Makes an HTTP DELETE request to the specified URL and returns the response body
  static delete(url) {
    return cy.request({
      method: 'DELETE',
      url: url,
      failOnStatusCode: false
    }).then(response => {
      return response.body;
    });
  }

  // Reads data from a file and returns it as a string
  static readFile(filePath) {
    return cy.readFile(filePath, { encoding: 'utf-8' });
  }

  // Writes data to a file
  static writeFile(filePath, data) {
    return cy.writeFile(filePath, data);
  }

  // Converts JSON data to a string
  static jsonToString(data) {
    return JSON.stringify(data);
  }
}

export default ApiUtils;
