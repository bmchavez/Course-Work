// MULTIPLE ELEMENT SELECTORS - return an html collection or a node list

// 1) document.getElementsByClassName()
// const items = document.getElementsByClassName('collection-item'); // Global Scope
      // console.log(items);
      // console.log(items[0]);
      // items[0].style.color = 'red';
      // items[3].textContent = "Hello";

      // const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // Within the UL

      // console.log(listItems);

      // console.log('');
      // console.log('');
      // console.log('');
      // console.log('');

// 2) document.getElementsByTagName
      // let lis = document.getElementsByTagName('li'); // Global Scope
      // console.log(lis);
      // console.log(lis[0]);
      // lis[0].style.color = 'blue';
      // lis[3].textContent = "li THREE";

      // // ARRAY METHODS DO NOT WORK ON THESE COLLECTIONS
      // // Convert HTML Collection into array
      // lis = Array.from(lis);

      // lis.reverse();

      // lis.forEach(function(li, index){
      //   console.log(li.className);
      //   li.textContent = `${index}: Hello Now`;
      // });

      // // console.log(lis);
      // console.log('');
      // console.log('');
      // console.log('');
      // console.log('');

// 3) document.querySelectorAll - Returns a Node List
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: Hello Now`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'red';
}

// console.log(items);