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

submitButton.addEventListener("click", () => {
  const nameOfItem = itemInput.value;
});
