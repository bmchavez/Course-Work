// // Get Dom Elements
// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const pasword2 = document.getElementById('password2');
// // const submit = document.querySelector("button").addEventListener('click', formSubmit);

// // FUNCTIONS
// // Show input error message
// function showError(input, message) {
//   const formControl = input.parentElement
//   // formControl.classList.add('error');
//   formControl.className = 'form-control error';

//   const small = formControl.querySelector('small');
//   small.innerText = message;
// }

// // Show success outline
// function showSuccess(input) {
//   const formControl = input.parentElement
//   // formControl.classList.add('error');
//   formControl.className = 'form-control success';
// }

// // Check if email is valid
// function isValidEmail(email) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }


// // EVENT LISTENERS
// // Add event listener to submit action
// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   if(username.value === '') {
//     showError(username, 'Username is required');
//   } else {
//     showSuccess(username);
//   }

//   if(email.value === '') {
//     showError(email, 'Email is required');
//   } else if(!isValidEmail(email.value)) { 
//     showError(email, 'Email is not valid');
//   } else {
//     showSuccess(email);
//   }

//   if(password.value === '') {
//     showError(password, 'Password is required');
//   } else {
//     showSuccess(password);
//   }

//   if(password2.value === '') {
//     showError(password2, 'Re-enter Password');
//   } else {
//     showSuccess(password2);
//   }
// });






