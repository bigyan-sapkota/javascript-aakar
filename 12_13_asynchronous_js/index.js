// js is single-threaded and non-block
// js is synchronous by default
// we can force js to act asynchronous

// 1) setTimeout(fn , delay)
// console.log("1");
// // asynchronous higher order function
// setTimeout(() => {
//   console.log("2");
// }, 2000);
// console.log("3");

// 2) clearTimeOut
const customTimeOut = setTimeout(() => {
  // console.log("this is timeout");
}, 1000);
clearTimeout(customTimeOut);

// function add(a, b) {
//   console.log(a + b);
// }
// const jodam = add;
// jodam(1, 2);

// 3) setInterval
const customInterval = setInterval(() => {
  // console.log("1000 ms bityo");
}, 1000);

setTimeout(() => {
  clearInterval(customInterval);
}, 5000);

class Person {
  constructor(name) {
    this.username = name;
  }
}

const p1 = new Person("bigyan");

// Promise in js
const promise1 = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("✅ Success!");
  } else {
    reject("❌ Failed!");
  }
});

promise1
  .then((message) => {
    // console.log(message);
  })
  .catch((error) => {
    // console.log(error);
  });

// Callback hell
// after 1 second ----
// 1
// after 1 second -----
// 2
// after 1 second ----
// 3

setTimeout(() => {
  // console.log("1");
  setTimeout(() => {
    // console.log("2");
    setTimeout(() => {
      // console.log("3");
    }, 1000);
  }, 1000);
}, 1000);

// Example:
// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`${ms / 1000}`);
//     }, ms);
//   });
// }

// wait(1000).then((msg) => console.log(msg));
// wait(2000).then((msg) => console.log(msg));
// wait(3000).then((msg) => console.log(msg));

// function wait(ms) {d
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// chaining
// wait(1000).then(() => {
//   console.log("1");
//   return wait(1000);
// });

// function numberJoderaDinxu(obj) {
//   return Object.keys(obj);
// }
// const person = { name: "Bigyan", class: "18" };
// const result = numberJoderaDinxu(person);
// console.log(result);

// function wait(ms) {
//   return setTimeout(() => {
//     console.log(`${ms / 1000}`);
//   }, ms);
// }

// wait(1000);
// wait(2000);
// wait(3000);

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

wait(1000)
  .then(() => {
    // console.log("1");
    return wait(1000);
  })
  .then(() => {
    // console.log("2");
    return wait(1000);
  })
  .then(() => {
    // console.log("3");
  });

// async / await
// ⚠️ async nachaida -> await lekhna vayena. await nachaida -> async lekhna vayena

async function printNumbers() {
  await wait(1000);
  console.log("1");
  await wait(1000);
  console.log("2");
  await wait(1000);
  console.log("3");
}

printNumbers();

// wait(1000)
//   .then(() => {})
//   .then(() => {})
//   .then(() => {});
