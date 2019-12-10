/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

// sample time input 12:40

function greet(time) {
let splittime = time.split(':');
 for (let i = 0; i < time.length; i++) {
   parseInt(splittime[i]);
 };
  let hour = splittime[0];
  let minute = splittime[1];

  if (hour < 12) {
    return 'Good Morning';
  } else if (hour > 17 ) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}


function displayMessage(string) {
        greeting = document.getElementById("greeting");
        greeting.innerText = string;
}



