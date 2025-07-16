// let, const and var

// var---------------------
// console.log(a); // undefined
var a = 123;
// console.log(a); // 123

var a = 211;
a = "bigyan";
// console.log(a);

if (a == "bigyan") {
  var course = "ashok";
}

// console.log(course);
// a = "bigyan"; // this is assignment of value
// a == "bigyan"; // this is checking if a is equal to "bigyan" or not

// let ---------------------------------------
let surname = "js";
surname = "ts";

if (a == "bigyan") {
  let abc = "bye bye";
}
// console.log(abc);

// console.log(surname);

// const -----------------------------------------
const nischal = "chitwan";

if (a == "bigyan") {
  const bigyan = "tanahub";
  const nischal = "tadi";
  console.log(bigyan);
  console.log(nischal);

  if (bigyan == "tanahub") {
    const nischal = "parsa";
  }
}

console.log(bigyan);
