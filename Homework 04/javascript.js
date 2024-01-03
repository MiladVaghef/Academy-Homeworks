// This "for" provides infitie prompt for keep talking to the bot going
for (;;) {
  let userInput = prompt("Talk to me please!");

  // If the user cancels the prompt say goodbye
  if (userInput === null) {
    alert("Goodbye!");
  }

  // user saying hi
  if (
    userInput.toLowerCase().includes("hello") ||
    userInput.toLowerCase().includes("hi") ||
    userInput.toLowerCase().includes("hola")
  ) {
    // answer
    alert("Hi mate! How you doing?");
  }

  // user saying he's doing okay
  else if (
    userInput.toLowerCase().includes("i'm doing fine") ||
    userInput.toLowerCase().includes("im doing fine") ||
    userInput.toLowerCase().includes("i'm doing okay") ||
    userInput.toLowerCase().includes("im doing okay") ||
    userInput.toLowerCase().includes("i'm doing great") ||
    userInput.toLowerCase().includes("im doing great")
  ) {
    // answer
    alert("I'm glad to hear that!");
  }

  // user asking bot how he's doing
  else if (
    userInput.toLowerCase().includes("how are you") ||
    userInput.toLowerCase().includes("are you okay")
  ) {
    // answer
    alert("I'm doing great! Thanks for asking");

    // user asking the bot's name
  } else if (
    userInput.toLowerCase().includes("what is your name") ||
    userInput.toLowerCase().includes("what you get called") ||
    userInput.toLowerCase().includes("what's your name") ||
    userInput.toLowerCase().includes("what people call you") ||
    userInput.toLowerCase().includes("what should i call you") ||
    userInput.toLowerCase().includes("can you tell me your name") ||
    userInput.toLowerCase().includes("i need your name")
  ) {
    // answer
    alert("My name is Kara! Nice to meet you");
  }

  // user saying nice to meet you
  else if (
    userInput.toLowerCase().includes("nice to meet you") ||
    userInput.toLowerCase().includes("I'm glad to meet you")
  ) {
    alert("Nice to meet you too!");
  }
  // user asking who made you
  else if (
    userInput.toLowerCase().includes("who made you") ||
    userInput.toLowerCase().includes("who is your creator") ||
    userInput.toLowerCase().includes("who is your developer") ||
    userInput.toLowerCase().includes("who designed you") ||
    userInput.toLowerCase().includes("do you now your creator")
  ) {
    alert("My developer and creator is Milad!");

    // if user asking how old are you
  } else if (
    userInput.toLowerCase().includes("how old are you") ||
    userInput.toLowerCase().includes("what is your age") ||
    userInput.toLowerCase().includes("how years old are you")
  ) {
    alert("I'm a robot silly I don't have physical form to have age");
  }

  // if user don't say anything
  else if (userInput.toLowerCase().includes("")) {
    alert(
      "You didn't say anything! How can I answer it when I don't know what it is!?"
    );
  }

  // If the bot doesnt have any answers :
  else alert("Sorry but I don't know how to answer that :c");
}
