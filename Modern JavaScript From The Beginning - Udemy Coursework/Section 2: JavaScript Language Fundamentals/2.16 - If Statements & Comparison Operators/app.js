// IF STATEMENTS

// if(something is tru){
//   do something
// } else {
//   do something else
// }

const id = '100';

// // EQUAL TO - testing value only, not type..
// if(id == 101){
//   console.log('CORRECT');
// } else{
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO - testing value only, not type..
// if(id != 101){
//   console.log('CORRECT');
// } else{
//   console.log('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE
// if(id === 101){
//   console.log('CORRECT');
// } else{
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE & TYPE
// if(id !== 101){
//   console.log('CORRECT');
// } else{
//   console.log('INCORRECT');
// }

// // TO TEST IF SOMETHING IS DEFINED AT ALL
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// GREATER OR LESS THAN
if(id > 200){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

// IF ELSE

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }


// LOGICAL OPERATORS

const name = 'Steve';
const age = 67;

//  AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
} else{
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}


// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

// Without braces is allowed
if(id === 100)
  console.log('Correct');
else
  console.log('Incorrect');