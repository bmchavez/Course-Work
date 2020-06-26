const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select')


      // form.addEventListener('submit', runEvent);
// // KEY EVENTS
// // Keydown
// taskInput.addEventListener('keydown', runEvent);
// // Keyup
// taskInput.addEventListener('keyup', runEvent);
// // Keypress
// taskInput.addEventListener('keypress', runEvent);
// // Focus
// taskInput.addEventListener('focus', runEvent);
// // Blur
// taskInput.addEventListener('blur', runEvent);
// // Cut
// taskInput.addEventListener('cut', runEvent);
// // Paste
// taskInput.addEventListener('paste', runEvent);

// Input Events
taskInput.addEventListener('input', runEvent);
// change
select.addEventListener('change', runEvent);



function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value)

       // heading.innerText = e.target.value;

      // // GET INPUT VALUE
      // console.log(taskInput.value);
      // // CLEAR FORM INPUT
      // taskInput.value = '';

      // e.preventDefault();
};