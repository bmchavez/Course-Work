const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// EVENT TYPES
      // // Click
      // clearBtn.addEventListener('click', runEvent);
      // // Doubleclick
      // clearBtn.addEventListener('dblclick', runEvent);
      // // Mousedown
      // clearBtn.addEventListener('mousedown', runEvent);
      // // Mouseup
      // clearBtn.addEventListener('mouseup', runEvent);
  // // Mouseenter & Mouseleave DO NOT fire when changing elements within main element
      // // Mouseenter
      // card.addEventListener('mouseenter', runEvent);
      // // Mouseleave
      // card.addEventListener('mouseleave', runEvent);
  // // Mouseover & Mouseout fires when changing elements within main element
      // // Mouseover
      // card.addEventListener('mouseover', runEvent);
      // // Mouseout
      // card.addEventListener('mouseout', runEvent);
      // Mousemove
      card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}