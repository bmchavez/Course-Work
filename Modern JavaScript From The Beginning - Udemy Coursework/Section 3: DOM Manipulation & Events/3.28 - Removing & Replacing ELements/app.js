// REPLACE ELEMENT
// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text Node
newHeading.appendChild(document.createTextNode('Task List/New Title!'));

// Get the old Heading
const oldHeading = document.getElementById('task-title');
// Get old Heading Parent
const cardAction = document.querySelector('.card-action');

// Replace H2
cardAction.replaceChild(newHeading, oldHeading)


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul')

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0]

let val;

// Classes
val = link.className;
val = link.classList;   // return DOM token list
val = link.classList[0];
val = link.classList.add('test');
val = link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link;

link.removeAttribute('title');

console.log(val);