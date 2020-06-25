// Create Element

const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add ID
li.id = 'new-item';

// Add an Attribute
li.setAttribute('title', 'New Item');

// Create Text Node and Append
li.appendChild(document.createTextNode('Hello World'));

// Create New Link Element
const link = document.createElement('a');
// Add Classes
link.className = 'delete-item secondary-content';
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as Child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);