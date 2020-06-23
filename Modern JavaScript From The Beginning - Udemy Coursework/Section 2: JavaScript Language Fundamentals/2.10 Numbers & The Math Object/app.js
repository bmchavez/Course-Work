const num1 = 100;
const num2 = 50;
let val;


//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;


// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4); //Rounds up
val = Math.floor(2.8); //Rounds down
val = Math.sqrt(64); //Square root
val = Math.abs(-3); //Absolute number
val = Math.pow(8, 2); //8 to the second power
val = Math.min(2,32,4,55,6,3); //returns the min
val = Math.max(2,32,4,55,6,3); //returns the max
val = Math.random(); //Generate a random float

val = Math.floor(Math.random() * 20 + 1); //Generates a random whole number between 1 & 20

console.log(val);