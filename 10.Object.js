/** @format */

// singleton

// object literals
const mySym = Symbol("key1");

const JsUser = {
  name: "Sunjay",
  age: 18,
  [mySym]: "mykey1", // You have to use bracket [] to use syntax
  location: "kathmandu",
  email: "sunjay@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser["email"]); // You have to also use square bracket [] to log the string
console.log(JsUser.age); // use dot notation to access object
console.log(JsUser[mySym]);

JsUser.age = 20;
//Object.freeze(JsUser); Basicaly freeze the object after this any changes will not be applied
JsUser.age = 10;
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
