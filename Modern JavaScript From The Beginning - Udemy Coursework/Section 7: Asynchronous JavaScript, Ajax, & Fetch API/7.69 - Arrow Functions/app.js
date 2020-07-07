//  ES5 Function
  // const sayHello = function() {
  //   console.log("Hello")
  // }

// // Convert to an Arrow Function
  // const sayHello = () => {
  //   console.log("Hello")
  // }

// Refactored Arrow Function (One line function does not need braces)
  // const sayHello = () => console.log('Hello');


  // sayHello();



//  ES5 Function
  // const sayHello = function() {
  //   return "Hello";
  // }

// ES6 Arrow Function - same as above
  // const sayHello = () => 'Hello';

  // console.log(sayHello());


// Return an object Literal
  // const sayHello = () => ({ msg: 'Hello' });

  // console.log(sayHello());

// **Single param does not need parentheses
  // const sayHello = (name) => console.log(`Hello ${name}`);
// // Same as above, but **
  // const sayHello = name => console.log(`Hello ${name}`);

// **Multiple params NEED parentheses
  // const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

  // // sayHello('Ben', 'Chavez');


// ARROW FUNCTIONS AS CALLBACKS
const users = ['Nathan', 'John', 'William'];

// ES5 Function
  // const nameLengths = users.map(function(name) {
  //   return name.length;
  // });

// ES6 Arrow Function - (same function as above) - SHORTER
  // const nameLengths = users.map((name) => {
  //   return name.length;
  // });

// ES6 Arrow Function - (same function as above) - SHORTEST
const nameLengths = users.map(name => name.length);

console.log(nameLengths);