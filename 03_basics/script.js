function add(num1, num2) {
  //num1 and num2 here are arguments
  const result = num1 + num2;
  console.log(result);
}

// add(1, 2); // 1 and 2 are parameters here

// add(36, 42);

// Arrow function
const subtract = (num1, num2) => {
  console.log(num1 - num2);
};

// subtract(10, 5);

// return
function sayHello(username) {
  return "Hello " + username;
}

const result = sayHello("Bigyan"); // "Hello Bigyan"
// console.log(result);

// sayHello("bigyan");
// console.log(sayHello("bigyan"));

function multiplyByTwo(num) {
  return 2 * num;
}

const result1 = multiplyByTwo(4);
const result2 = multiplyByTwo(5);
console.log(result1 + result2);
