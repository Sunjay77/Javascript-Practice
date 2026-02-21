/** @format */

function sayMyName() {
  console.log("hi");
}
// sayNyname();

// function addTwoNumbers(number1, number2) {
//   // console.log(number1 + number2); // num1, num2 are parameters
//   // let result = number1 + number2
//   // return result
//   return number1 + number2; // this way you need to use variable
// }
// // addTwoNumbers(2, 8); // this is argument
// // Function rule once return it will stop

// const result = addTwoNumbers(2, 8);

// console.log("Result:", result);

// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("please enter a username");
//     return;
//   }
//   return `${username} just logged in`;
// }

// console.log(loginUserMessage("sunjay"));

function loginUserMessage(username) {
  if (!username) {
    // ! this gives opposite instruction like if it exist it would be false and if doesnt it would be true same but less code
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage());
