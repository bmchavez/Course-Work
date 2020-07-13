// STORAGE CONTROLLER


// ITEM CONTROLLER
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Mac n Cheese', calories: 200},
      {id: 2, name: 'Eggs', calories: 500}
    ],
    currentItem: null,
    totalCalories: 0
  }
  
  // Public Methods
  return {
    logData: function() {
      return data;
    }
  }
})();

// UI CONTROLLER
const UICtrl = (function() {
  
  // Public Methods
  return {

  }
})();

// APP CONTROLLER
const AppCtrl = (function(ItemCtrl, UICtrl) {
  
  // Public Methods
  return {
    init: function() {
      console.log('Initializing App...');
    }
  }

})(ItemCtrl, UICtrl);


// Initialize App
AppCtrl.init();