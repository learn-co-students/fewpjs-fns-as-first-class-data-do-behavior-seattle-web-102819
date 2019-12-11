/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let split_time = (time).split("").replace(":", "0")
  myTime = parseInt(split_time)
  result  if (17 < myTime < 24) {
    return 'Good Evening';
  } else if (12 < myTime < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Morning';
//   }
// }
/* Write your implementation of displayMessage() */
