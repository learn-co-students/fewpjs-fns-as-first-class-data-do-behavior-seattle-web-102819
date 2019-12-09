function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* Given Code, don't edit above here...*/



/* Write your implementation of greet() */
// timeStr is in HH:MM 24h format
function greet(timeStr) {
  const timeInt = parseInt(timeStr, 10)
  if (timeInt < 12) {
    return "Good Morning"
  } else if (timeInt > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(str) {
  document.getElementById("greeting").innerText = str
}