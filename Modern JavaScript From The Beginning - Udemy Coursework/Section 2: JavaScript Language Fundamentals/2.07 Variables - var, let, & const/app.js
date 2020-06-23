//  var, let, const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith'
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, $
//  Cannot start with a number

// Multi word variables
var firstName = 'John'; // Camel Case


// LET
// let person = 'John Doe';
// console.log(person);
// person = 'Steve Smith'
// console.log(person);

// CONST
const person = 'John Doe';
console.log(person);
// Cannot re-assign
person = 'Steve Smith'
console.log(person);
// You have to assign a value
const myGreeting; // THIS WILL NOT WORK


const person = {
  name: 'John',
  age: 30
}

// You can change the details of the object, you just cannot reassign it
person.name = 'Sara';