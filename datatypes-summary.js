// primitive

// 7 types: string, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userfamily;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 123456n;

// Refrence(Non-Primitive)

//Array, Objects, Functions

const heros = ["ironman", "batman", "spiderman"];

let myObj = {
  name: "Jay",
  age: "23",
};

const myFunction = function () {
  console.log("Hello World");
};
console.log(typeof bigNumber);

// ************************

// Stack(primitive),  Heap(non-primitive)

let sanjayLama = "developer";

let anotherName = sanjayLama;

anotherName = "designer";

console.log({ sanjayLama });
console.log({ anotherName });

let userOne = {
  email: "user@heros.com",
  gmail: "whater@",
};

let userTwo = userOne;

userTwo.email = "jay@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
