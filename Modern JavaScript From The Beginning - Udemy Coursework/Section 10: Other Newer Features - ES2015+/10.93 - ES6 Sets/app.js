// SETS - Store UNIQUE values of any type

const set1 = new Set();

// Add values to set - Method 2
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);      // Cannot add an item twice!

// Add values to set - Method 1
const set2 = new Set([1, true, 'string']);
console.log(set2);

console.log(set1);


// Get count
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'John'}));   // Reference Object - so this is false
console.log({name: 'John'} === {name: 'John'});  // Reference Object - so this is false

// Delete from set
set1.delete(100);

console.log(set1);

// ITERATE THROUGH SETS

// For..of
for(let item of set1) {
  console.log(item);
}

// ForEach Loop
set1.forEach((value) => {
  console.log(value);
});

// CONVERT SET INTO ARRAY
const setArr = Array.from(set1);
console.log(setArr);