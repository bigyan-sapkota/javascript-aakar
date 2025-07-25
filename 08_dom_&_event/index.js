const headingOne = document.getElementById("custom-heading");
headingOne.textContent = "Hello world";

const mecElement = document.getElementsByClassName("mec");
console.log(mecElement);
console.log(mecElement[1]);

const allSpans = document.getElementsByTagName("span");
console.log(allSpans[1]);
allSpans[1].textContent = "Bye";

const firstInput = document.querySelector("#input-first");
console.log(firstInput);

const customDiv = document.getElementById("custom");
console.log(customDiv);

customDiv.innerHTML =
  "<div><h1>Hello 1</h1> <h1 style='background-color:red'>Hello 2</h1></div>";

// appending = add
const fruitsList = document.getElementById("list-one");
// const newItem = "<li>Banana</li>";
const newItem = document.createElement("li");
newItem.textContent = "Banana";
const secondNewItem = document.createElement("li");
secondNewItem.textContent = "Mango";
fruitsList.appendChild(newItem);
fruitsList.appendChild(secondNewItem);
