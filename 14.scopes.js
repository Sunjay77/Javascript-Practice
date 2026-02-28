/** @format */

// var c = 300; // most of the people avoid var
let a = 300;
{
} // This is scope when we use in function or if or else

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log("INNER: ", a);
}

// // for (let index = 0; index < array.length; index++) {
//   // const element = array[index];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "sunjay";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
// one();

if (true) {
  const username = "sunjay";
  if (username === "sunjay") {
    const website = "youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++ Interesting ++++++++

function addone(num) {
  return num + 1;
}

console.log(addone(5));

// addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
