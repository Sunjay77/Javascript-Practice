/** @format */

// This function

// const user = {
//   username: "sanjay",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);

//   },
// };

// user.welcomeMessage();
// user.username = "son"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//   let username="sanjay"
//   console.log(this.username)
// }
// chai()

// const chai = function () {
//   let username="sanjay"
//  console.log(this.username)
// }
// chai()

//****Arrow function*****/ : you can use this in arrow function

// const chai = () => {
//   let username="sanjay"
//  console.log(this.username)
// }
// chai()

// when using curly bracket you have to use return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(3, 4));

///// no return

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));

const addTwo = (num1, num2) => ({username: "sanjay"} )
console.log(addTwo(3, 4));

const myArray = [2, 3, 4, 5, 6]