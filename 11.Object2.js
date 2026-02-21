/** @format */
// const tinderUser = new Object()
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "sun@gmail.com",
  userfullname: {
    firstname: "sunjay",
    lastname: "lama",
  },
};

// console.log(regularUser.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({}, obj1, obj2); // giving empty paranthesis is not important but good to give

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "sunjay@gmail.com",
  },
  {
    id: 1,
    email: "sunjay@gmail.com",
  },
  {
    id: 1,
    email: "sunjay@gmail.com",
  },
  {
    id: 1,
    email: "sunjay@gmail.com",
  },
];
users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in english",
  price: "999",
  courseInstructor: "sunjay",
};

const { courseInstructor: instructor } = course;
// console.log(courseInstructor);

// const navbar = () => {};
// navbar((company = "sunjay")); Object destructure

console.log(instructor);

// {
//   "name": "sanjay",
//     "couse": "js in english",

// }

[{}, {}, {}];
