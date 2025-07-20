// sayHello("Anjil");

function sayHello(username) {
  console.log("Hello " + username);
}

const sayBye = (username) => {
  console.log("Bye " + username);
};
// sayBye("world");

function add(num1, num2) {
  console.log(arguments);
}

// add(1, 2);

// const subtract = (num1, num2) => {
//   console.log();
// };
// subtract(5, 4);

// factorial ??
// Factorial of 5 = 5x4x3x2x1;
// Factorial of 10 = 10x9x8x7x6x5x4x3x2x1;

function showFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * showFactorial(n - 1);
}

const result = showFactorial(5);
console.log(result);
