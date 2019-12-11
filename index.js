/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let split_time = (time).split("")
  myTime = parseInt(split_time)
  result  if (myTime < 12) {
    return 'Good Morning';
  } else if (12 < myTime < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
//   }
// }
/* Write your implementation of displayMessage() */
