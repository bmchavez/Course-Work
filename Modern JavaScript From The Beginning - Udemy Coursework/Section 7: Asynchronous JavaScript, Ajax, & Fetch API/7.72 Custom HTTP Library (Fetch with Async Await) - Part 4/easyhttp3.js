/**
 * EasyHTTP Library
 * Libray for making HTTP requests
 * 
 * @version 3.0.0
 * @author Benjamin Chavez
 * @license MIT
 * 
 **/

 class EasyHTTP {
  // Make an HTTP GET Request 
  async get(url) {
    const response = await fetch(url);

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP DELETE Request
    async delete(url){
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
    });

    const responseData = await 'Resource Deleted...';
    return responseData;
  }
 }