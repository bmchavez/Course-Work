const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steva@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL',
  },
  getBirthYear: function(){
    return 2020 - this.age;
  }
}

let val;

val = person;

// Get a specific value
val = person.firstName; // This is the recommended way to do it
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

// Arrays of objects
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 70},
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}