let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes - (returns node list)
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;


// TYPES OF NODES
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children elment nodes - (returns html  collection)
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Get children if children
list.children[4].children[0].id = 'test-link';
val = list.children[4].children[0];

// First Child
val = list.firstChild;    // Includes text nodes
val = list.firstElementChild;  // This will skip all text nodes

// Last Child
val = list.lastChild;    // Includes text nodes
val = list.lastElementChild;  // This will skip all text nodes

// Count child elements
val = list.childElementCount;


// PARENT NODES

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get Next Sibling
val = listItem.nextSibling;   //Includes text Nodes
val = listItem.nextElementSibling;  //Does not include Text Nodes

// Get Previous Sibling
val = listItem.previousSibling;   //Includes text Nodes
val = listItem.previousElementSibling;  //Does not include Text Nodes
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(val);