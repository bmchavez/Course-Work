let val;

// Number to string
val = String(555);
val = String(4+4)

// Boolean to a string
val = String(true);

// Date to a string
val = String(new Date());

// Array to a string
val = String([1,2,3,4])

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');  //NaN = Not a number
val = Number([1,2,3]);  //NaN = Not a number

val = parseInt('100.30');
val = parseFloat('100.31');


// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);  //Only works on strings
console.log(val.toFixed(2)); //Only works on numbers

const val1 = '5'; //type coersion
const val2 = 6;
const sum = val1 + val2

console.log(sum);
console.log(typeof sum);