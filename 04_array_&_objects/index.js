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
console.log(surnameAddedFriends);

let foods = ["🍕", "🍔", "🍟"];
let shoutFoods = foods.map((f) => f + "🔥");
console.log(shoutFoods);
// ['🍕🔥', '🍔🔥', '🍟🔥']

const numbers = [1, 2, 89, 8923, 9403, 848, 282, 339, 88, 24];
