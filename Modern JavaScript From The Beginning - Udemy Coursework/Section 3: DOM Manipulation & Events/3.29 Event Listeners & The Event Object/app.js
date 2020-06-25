// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello Event Listener');

//   // e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello'

  // Event Type
  val = e.type;

  // Time Stamp
  val = e.timeStamp;

  // Coordinates of event relative to the window
  val = e.clientY;  //From Top of screen
  val = e.clientX;  //From left of screen

  // Coordinates of event relative to the element
  val = e.offsetY;  //From Top of screen
  val = e.offsetX;  //From left of screen

  console.log(val);
}