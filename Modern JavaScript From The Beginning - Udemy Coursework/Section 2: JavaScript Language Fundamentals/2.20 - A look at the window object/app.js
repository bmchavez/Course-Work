// WINDOW METHODS / OBJECTS / PROPERTIES 

// Alert
// alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('Yes');
// } else {
//   console.log('NO');
// }

// PROPERTIES

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
// val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';

// Reload
// window.location.reload();

// History Object

// window.history.go(-1);
// val = window.history.length;

// Navigator Object - deals with the actual browser
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;


console.log(val);