// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
console.log("hello world");
// for loop
for (let i = 1; i <= 10; i++) {
  //   if (i === 3) break;
  if (i === 3) continue;
  console.log(i);
}

console.log("while loop");
// while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("do while loop");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// for in - for Objects only
const person = {
  name: "Aayush Ghimere",
  age: 22,
  address: "Ratnanaagar",
};

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

// for each loop
const matters = ["solid", "liquid", "gas"];
matters.forEach((item, index) => {
  console.log(`${index}. ${item}`);
  //   console.log(index + 1 + ". " + elem);
});

// 1. solid
// 2. liquid
// 3. gas
