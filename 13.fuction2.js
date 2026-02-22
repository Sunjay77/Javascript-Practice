/** @format */

function calculateCartPrice(...num1) {
  // using rest operator
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "sunjay",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

// handleObject(user);

handleObject({
  userbane: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
