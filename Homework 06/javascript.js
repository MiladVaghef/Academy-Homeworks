// Main container
function createContainerDiv() {
  // Creating the main div
  let containerDiv = document.createElement("div");
  // Giving it ID
  containerDiv.id = "containerDiv";
  // Styles:
  containerDiv.style.display = "flex";
  containerDiv.style.justifyContent = "space-around";
  containerDiv.style.alignItems = "center";
  containerDiv.style.width = "80vw";
  containerDiv.style.height = "42vw";
  containerDiv.style.backgroundColor = "rgba(242, 99, 255, 0.263)";
  // Putting it in body
  document.body.appendChild(containerDiv);
  // Showing it in console log
  console.log("Main container ==>", containerDiv);

  // Creating left page
  createLeftPage();

  // Creating right page
  createRightPage();
}
createContainerDiv();

function createLeftPage() {
  // Creating the left pages container
  let leftPagesContainer = document.createElement("div");
  // Giving it ID
  leftPagesContainer.id = "leftPagesContainer";
  // Styles:
  leftPagesContainer.style.display = "flex";
  leftPagesContainer.style.flexDirection = "column";
  leftPagesContainer.style.justifyContent = "space-around";
  leftPagesContainer.style.alignItems = "center";
  leftPagesContainer.style.backgroundColor = "rgba(51, 0, 255, 0.136)";
  leftPagesContainer.style.width = "34vw";
  leftPagesContainer.style.height = "38vw";
  // Putting it in containerDiv
  document.getElementById("containerDiv").appendChild(leftPagesContainer);
  // Showing it in the console log
  console.log("Left Pages ==>", leftPagesContainer);

  // Creating items for the left page
  createLeftPageRectangleItems();
  createLeftPageSquareItems();
}

function createRightPage() {
  // Creating the right pages container
  let rightPagesContainer = document.createElement("div");
  // Giving it ID
  rightPagesContainer.id = "rightPageContainer";
  // Styles:
  rightPagesContainer.style.display = "grid";
  rightPagesContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
  rightPagesContainer.style.gridTemplateRows = "repeat(3, 1fr)";
  rightPagesContainer.style.placeItems = "center";
  rightPagesContainer.style.backgroundColor = "rgba(51, 0, 255, 0.136)";
  rightPagesContainer.style.width = "34vw";
  rightPagesContainer.style.height = "38vw";
  // Putting it in containerDiv
  document.getElementById("containerDiv").appendChild(rightPagesContainer);
  // Showing it in the console log
  console.log("Right Pages ==>", rightPagesContainer);

  // Creating items for the right page
  createRightPageLittleSquares();
  createRightPageLittleSquares();
  createRightPageLittleSquares();
  createRightPageLittleSquares();
  createRightPageLittleSquares();
  createRightPageLittleSquares();
}

function createLeftPageRectangleItems() {
  // Creating Rectangle Items
  let RectangleItem = document.createElement("div");
  // Adding class to rectangle items
  RectangleItem.classList.add("RectangleItems");
  // Styles:
  RectangleItem.style.backgroundColor = "#f8ddd45f";
  RectangleItem.style.width = "22vw";
  RectangleItem.style.height = "12vw";
  // Putting in the left page
  document.getElementById("leftPagesContainer").appendChild(RectangleItem);
  // Showing it in console log
  console.log("Rectangle items on left page ==>", RectangleItem);
}

function createLeftPageSquareItems() {
  // Creating Square Items
  let SquareItem = document.createElement("div");
  // Adding class to square items
  SquareItem.classList.add("squareItems");
  // Styles:
  SquareItem.style.backgroundColor = "#f8ddd45f";
  SquareItem.style.width = "22vw";
  SquareItem.style.height = "16vw";
  // Putting it in left page
  document.getElementById("leftPagesContainer").appendChild(SquareItem);
  // Showing in it console log
  console.log("Square items on left page ==>", SquareItem);
}

function createRightPageLittleSquares() {
  // Creating little squares
  let LittleSquareItem = document.createElement("div");
  // Adding class to little squares
  LittleSquareItem.classList.add("littleSquares");
  // Styles:
  LittleSquareItem.style.width = "8vw";
  LittleSquareItem.style.height = "8vw";
  LittleSquareItem.style.backgroundColor = "#f8ddd45f";
  // Putting it in right page
  document.getElementById("rightPageContainer").appendChild(LittleSquareItem);
  // Showing it in console log
  console.log(LittleSquareItem);
}
