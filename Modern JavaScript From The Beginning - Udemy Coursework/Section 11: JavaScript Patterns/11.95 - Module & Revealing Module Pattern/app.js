// Basic Structure

// IFFY FUNCTION - Runs at beginning of code
(function(){
  // Declare private vars and functions

  return {
    // Declare public var and functions

  }
})();

// STANDARD MODULE PATTERN
  const UIctrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();


UIctrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added.....');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }


  return {
    add: add,
    get: get
  }
})();


ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Matia'});
console.log(ItemCtrl.get(2));;