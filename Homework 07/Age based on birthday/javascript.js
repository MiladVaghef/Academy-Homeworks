document.querySelector("#form").addEventListener("change", calculateAge);

function calculateAge() {
  // Get the current date
  let currentDate = new Date();

  // Get user input values
  let yearOfBirth = parseInt(document.querySelector("#yearSelection").value);
  let monthOfBirth = parseInt(document.querySelector("#monthSelection").value);
  let dayOfBirth = parseInt(document.querySelector("#daySelection").value);

  // Calculate the age
  let age = currentDate.getFullYear() - yearOfBirth;

  // Display the result
  document.querySelector("#resultSection p").innerHTML =
    "Your age is: " + age + " years";
}
