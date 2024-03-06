document.addEventListener("DOMContentLoaded", function () {
  // Selecting elements
  const form = document.getElementById("form");
  const noteInput = document.getElementById("note");
  const noteList = document.getElementById("note-list");

  // Event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the value of the note from the input
    const noteValue = noteInput.value.trim();

    if (noteValue !== "") {
      // Create a new list item
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${noteValue}</span>
        <a href="#" class="removeBtn">X</a>
      `;

      // Append the new list item to the note list
      noteList.appendChild(listItem);

      // Save the updated notes to local storage
      saveNotesToLocalStorage();

      // Clear the input for the next note
      noteInput.value = "";
    }
  });

  // Event delegation for removing notes
  noteList.addEventListener("click", function (event) {
    if (event.target.classList.contains("removeBtn")) {
      // Remove the parent list item when the remove button is clicked
      event.target.parentElement.remove();
    }
  });
});
