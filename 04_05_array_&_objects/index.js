// let foods = ["burger", "momo", "pizza"];
// console.log(foods);
// console.log(foods.length);
// console.log(foods[0]);

// let foods = ["🍕", "🍔", "🍟"];
// foods.push("🍗");
// console.log(foods);

// splice and slice - the difference might be asked during interview

// splice
let names = ["anjil", "bigyan", "aayush", "mec", "safalta"];
let removedNames = names.splice(1, 3);
// console.log("Removed names", removedNames);
// console.log("Result names", names);

// slice
let things = ["bulb", "fan", "board", "bottles"];
let removedThings = things.slice(2, 4); // slice(startingIndex, elementNumber)
// console.log("Removed things : ", removedThings);
// console.log("Original things : ", things);

// higher order function -> those functions who takes function as argument

const friends = ["bigyan", "bishal", "rita", "gita", "anita", "sarita"];

// map is a higher order function -> as it takes function as argument
// it is used to loop through array
const surnameAddedFriends = friends.map((item, index) => {
  return index + ". " + item + " sapkota";
});
// console.log(surnameAddedFriends);

// let foods = ["🍕", "🍔", "🍟"];
// let shoutFoods = foods.map((f) => f + "🔥");
// console.log(shoutFoods);
// ['🍕🔥', '🍔🔥', '🍟🔥']

// filter, reduce, array other methods, objects, loops, switch case, date, split, iife, truth and falsy, map, set

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter
const evenNumbers = numbers.map((number, index) => {
  if (number % 2 === 0) {
    return number;
  }
});

// console.log(evenNumbers);

const filteredEvenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
// console.log(filteredEvenNumbers);

let foods = ["🍕", "🍔", "🍟"];
let frenchFriesIndex = foods.findIndex((item) => {
  return item === "🍟";
});

// console.log(frenchFriesIndex);

const everyone = ["nishcal", "mec", "safalta", "anjil", "bigyan"];
const reverseSortedEveryone = everyone.sort().reverse();

// console.log(reverseSortedEveryone);
// console.log(everyone.includes("ashok"));

const customNumbers = [1, 2, 3, 4, 5];
const total = customNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// console.log(total);

// Objects
// Objects are something that exist in real-life (class is template)
// Example : person, student.

// class
function Person(name, age) {
  this.name = name;
  this.age = age || 20;
}

// method
Person.prototype.sayHello = function () {
  console.log("Hello I am " + this.name + " and I am " + age + " years old");
};

// method
Person.prototype.checkMinor = function () {
  if (this.age >= 20) {
    console.log(this.name + " is not minor");
  } else {
    console.log(this.name + " is minor");
  }
};

const anjil = new Person("anjil");
anjil.sayHello();
const p2 = new Person("bigyan", 20);
p2.sayHello();
anjil.checkMinor();
