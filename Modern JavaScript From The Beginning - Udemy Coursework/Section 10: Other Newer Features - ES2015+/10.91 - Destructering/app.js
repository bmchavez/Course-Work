// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

// Rest Pattern (with spread operator)
[a, b, ...rest] = [100, 200, 300, 400, 500];

// console.log(rest);

({a, b} = {a: 100, b: 200, c: 300, d: 400, d: 500});
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, d: 500});

// console.log(rest);


// ARRAY DESTRUCTURING

  // const people = ['John', 'Beth', 'Mike'];

  // const[person1, person2, person3] = people;

  // console.log(person1, person2, person3);

// PARSE ARRAY RETURNED FROM FUNCTION
  // function getPeople() {
  //   return ['John', 'Beth', 'Mike']
  // }

  // let person1, person2, person3;
  // [person1, person2, person3] = getPeople();

  // console.log(person1, person2, person3);


// OBJECT DESTRUCTURING
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
}

// Old ES5
  // const name = person.name,
  //       age = person.age,
  //       city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person

console.log(name, age, city);

sayHello();