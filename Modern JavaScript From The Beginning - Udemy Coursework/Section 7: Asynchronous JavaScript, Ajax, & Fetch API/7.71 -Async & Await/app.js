// // Adding Async to a function makes the function return a promise
  // async function myFunc() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => resolve('Hello'), 1000);
  //   });

  //   const error = false

  //   if(!error){
  //     const response = await promise; // Wait until promise is resolved
  //     return response;
  //   } else {
  //     await Promise.reject(new Error('Something went wrong'));
  //   }

  // }

  // myFunc()
  //   .then(response => console.log(response))
  //   .catch(err => console.log(err));




  async function getUsers() {
    //  Await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once the promise is resolved
    const data = await response.json();

    // Onle proceed one the second promise is resolved
    return data;
  }

  getUsers().then(users => console.log(users));