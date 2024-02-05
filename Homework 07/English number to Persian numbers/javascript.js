// English Number Input :
let englishNumberInput = document.querySelector("#englishNumber");
// Submit Button :
let submitButton = document.querySelector("#submitButton");
// Persian Result :
let persianResultP = document.querySelector("#returnPersian"); // Add the '#' to select by ID
submitButton.addEventListener("click", convertEnglishToPersian);

function convertEnglishToPersian() {
  let englishNumber = BigInt(englishNumberInput.value);
  persianResultP.textContent = englishNumber.toLocaleString();
  persianResultP.style.fontFamily = "A Rezvan";
}
