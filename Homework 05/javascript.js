const karaAnswers = {
  normalTalks: {
    greetings: ["Hi mate! How you doing?", "Hello there!", "Hola!", ""],
    howAreYou: [
      "I'm great!",
      "Thank you for asking <3",
      "I'm doing great mate!",
    ],
  },
  programmingQuestions: {
    javascript: [
      "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
      "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
    ],
  },
  musicSuggestion: {
    EDM: [
      "NERVE DAMAGE - MUST DIE!",
      "Walk Me Home - Said The Sky",
      "Buster Effect - Kotori",
      "Stupid - Eliminate",
    ],
  },
};

function getRandomAnswer(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function karaGetQuestion() {
  for (;;) {
    let getQuestionInput = prompt("Talk to me please!");
    if (getQuestionInput === null) {
      alert("See you later!");
      break;
    } else if (getQuestionInput === "") {
      alert("You didn't type anything!");
    } else {
      karaGiveAnswer(getQuestionInput);
    }
  }
}

function karaGiveAnswer(getQuestionInput) {
  getQuestionInput = getQuestionInput.toLowerCase();

  // Normal talks answers section :
  if (
    getQuestionInput.includes("hello") ||
    getQuestionInput.includes("hi") ||
    getQuestionInput.includes("hola")
  ) {
    alert(getRandomAnswer(karaAnswers.normalTalks.greetings));
  } else if (
    getQuestionInput.includes("how are you") ||
    getQuestionInput.includes("how you doing")
  ) {
    alert(getRandomAnswer(karaAnswers.normalTalks.howAreYou));
  }

  // Programming answers section :
  else if (
    getQuestionInput.includes("tell me about javascript") ||
    getQuestionInput.includes("i want to know about javascript") ||
    getQuestionInput.includes("javascript") ||
    getQuestionInput.includes("i wanna know about javascript")
  ) {
    alert(getRandomAnswer(karaAnswers.programmingQuestions.javascript));
  }
  // Music suggestion answers section :
  else if (
    getQuestionInput.includes("suggest edm") ||
    getQuestionInput.includes("give me edm") ||
    getQuestionInput.includes("suggest me edm")
  ) {
    alert(getRandomAnswer(karaAnswers.musicSuggestion.EDM));
  }
  // Errors
  else {
    alert("I don't know how to answer to that!");
  }
}

karaGetQuestion();
