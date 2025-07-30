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
  console.log("this is timeout");
}, 1000);
clearTimeout(customTimeOut);

// function add(a, b) {
//   console.log(a + b);
// }
// const jodam = add;
// jodam(1, 2);

// 3) setInterval
const customInterval = setInterval(() => {
  console.log("1000 ms bityo");
}, 1000);

setTimeout(() => {
  clearInterval(customInterval);
}, 5000);
