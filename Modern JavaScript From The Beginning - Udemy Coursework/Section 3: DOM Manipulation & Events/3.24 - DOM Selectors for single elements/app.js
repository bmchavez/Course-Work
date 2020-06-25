// SINLGE ELEMENT SELECTORS (grabs first or only item)

// 1) document.getElementByID()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change Styling
document.getElementById('task-title').style.background = 'red';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '10px';
// document.getElementById('task-title').style.display = 'none';

// A more efficient way to do this is by setting task-title class to a variable:
const taskTitle = document.getElementById('task-title');

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:green">HTML INSERT</span>';

console.log('');
console.log('');
console.log('');
console.log('');

// 2) document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));  //Grabs first if there is more than one

document.querySelector('ul li').style.color = 'red';


document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';

// the following only effects the first becuase querySelector() is singular
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




