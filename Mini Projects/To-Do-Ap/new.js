// Grab the elements from the DOM
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Listen for a click on the 'Add' button
addBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent adding empty tasks
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create the <li> container for the task
  const li = document.createElement("li");

  // Create a <span> to hold the task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-text";

  // Feature 1: Complete task
  // When the text is clicked, toggle the 'completed' class for strikethrough
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Feature 2: Delete task
  // Create the delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // When the delete button is clicked, remove the whole <li> from the list
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Assemble the list item and add it to the unordered list
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear the input field for the next task
  taskInput.value = "";
}
