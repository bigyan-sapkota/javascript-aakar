// const list = document.getElementById("todoList");
// const input = document.getElementById("taskInput");
// const button = document.getElementById("addTask");

// button.addEventListener("click", () => {
//   const task = input.value;
//   if (task) {
//     const listItem = document.createElement("li");
//     listItem.textContent = task;
//     listItem.addEventListener("click", () => listItem.remove()); // Remove task on click
//     list.appendChild(listItem);
//     input.value = ""; // Clear the input
//   }
// });

const itemInput = document.getElementById("task-input");
const submitButton = document.getElementById("add-task");
const shoppingList = document.getElementById("shopping-list");

itemInput.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "Enter") {
    const nameOfItem = itemInput.value.trim();
    addTask(nameOfItem);
  }
});

submitButton.addEventListener("click", () => {
  const nameOfItem = itemInput.value.trim();
  addTask(nameOfItem);
});

const addTask = (nameOfItem) => {
  if (nameOfItem) {
    const itemElement = document.createElement("li");
    itemElement.textContent = nameOfItem;
    itemElement.style.cursor = "pointer";
    itemElement.addEventListener("click", function () {
      this.remove();
    });
    shoppingList.append(itemElement);
    itemInput.value = "";
  }
};

// truthy and falsy
if (true) {
  // console.log("This will run");
}

// truthy -----------------------------------------------------------

// 1)  Non-zero numbers: 1, -5, 3.14
if (1) {
  // console.log("1st");
}

// 2) Non empty string
if ("bigyan") {
  // console.log("3rd");
}

// 3) empty object
if ({}) {
  // console.log("6th");
}

// 4) empty array
if ([]) {
  // console.log("7th");
}

// falsy ------------------------------------------------------------
//  1) zero
// -0 is also falsy value
if (0) {
  console.log("2nd");
}

// 2) empty string
if ("") {
  console.log("4th");
}

// BUT CONSIDER THIS:
// empty string with space is also truthy
if (" ") {
  // console.log("5th");
}

// null, undefined, NaN are falsy value

// Write double exclamation and anything, then it gives true or false

// console.log(!!" ");

// const customObject = { name: "bigyan", roll: 1 };
// const customObjectKeys = Object.keys(customObject);
// console.log(customObjectKeys);
// if (customObjectKeys.length) {
//   console.log("Object is not empty");
// }

// const myArr = [1];
// if (myArr.length) {
//   console.log("this array is not empty");
// }
