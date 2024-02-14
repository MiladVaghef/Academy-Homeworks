document.addEventListener("DOMContentLoaded", function () {
  const createPageButton = document.getElementById("createPage");
  const toDoContainer = document.getElementById("toDoContainer");

  createPageButton.addEventListener("click", function () {
    // Create a new to-do item
    const newToDo = document.createElement("div");
    newToDo.className = "toDo";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "toDoCheckInputs";
    // Use a unique ID for each checkbox
    checkbox.id = "checkBoxLabel" + (toDoContainer.childElementCount + 1);

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.className = "customCheckbox";
    label.innerHTML = '<i class="bi bi-check-lg"></i>';

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.className = "toDoTextInput";

    // Append elements to the new to-do item
    newToDo.appendChild(checkbox);
    newToDo.appendChild(label);
    newToDo.appendChild(textInput);

    // Append the new to-do item to the to-do container
    toDoContainer.appendChild(newToDo);
  });
});
