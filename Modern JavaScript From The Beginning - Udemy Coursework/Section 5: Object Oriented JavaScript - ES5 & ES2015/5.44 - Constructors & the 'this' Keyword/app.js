// CONSTRUCTORS

// Person Constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age
  this.birthday = new Date(dob);
  // Method: a function inside of an object
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}


// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// // console.log(brad);
// // console.log(john);

const ben = new Person('Ben', '11-15-1991');
console.log(ben.calculateAge());