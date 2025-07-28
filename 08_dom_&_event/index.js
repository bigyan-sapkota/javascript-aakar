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
// fruitsList.appendChild(newItem);
// fruitsList.appendChild(secondNewItem);
fruitsList.append(newItem, secondNewItem);

const replaceParent = document.getElementById("replace-parent");
const oldPara = document.getElementById("old");
const newPara = document.createElement("p");
newPara.textContent = "New Paragraph";
// const newPara = "<p>New Paragraph</p>"; // This won't work ❌
replaceParent.replaceChild(newPara, oldPara);

const imageToChange = document.getElementById("image-to-change");
console.log(imageToChange.getAttribute("alt"));
imageToChange.setAttribute("src", "./images/farm.png");
imageToChange.setAttribute("alt", "farm");
// imageToChange.removeAttribute("alt");

// const styleToChange = document.getElementById("style-to-change");
// styleToChange.style.fontSize = "3rem";
// styleToChange.style.color = "white";
// styleToChange.style.backgroundColor = "blue";
// styleToChange.style.cssText =
//   "font-size: 3rem; color: white; background-color: blue";
// styleToChange.classList.add("custom-style");

// javascript events
const btn = document.getElementById("btn");
const styleToChange = document.getElementById("style-to-change");
console.log(btn);

btn.addEventListener("click", () => {
  styleToChange.classList.toggle("custom-style");
});

const boxHandlerButton = document.getElementById("box-handler");
const customBox = document.getElementById("custom-box");

boxHandlerButton.addEventListener("click", () => {
  customBox.classList.toggle("hide-this");
});
