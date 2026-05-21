// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

const restartBtn = document.getElementById("restart-btn");
const finalScore = document.getElementById("final-score");


// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

randomizeWord()

//Randomize word
function randomizeWord() {
  let randomWord = function(array) {
  return array[Math.floor(Math.random() * array.length)];
  }

  function addWordToDom() {
    word.textContent = (randomWord(words))
  }

  addWordToDom()
}

//Scoring
let score = 0;
function updateScore() {
  score++
  scoreEl.textContent = (score)
}

//Timer
let time = 10;
function countdown() {
    (time--)
      if (time < 0) {
        finalScore.textContent = (scoreEl.textContent)
        endgameEl.style.display = "inline";

        clearInterval(timer)
      } 
      if (time >= 0) {
        displayTime()
      }
}

const timer = setInterval(countdown, 1000)

//display time
function displayTime() {
  timeEl.textContent = (time + "s")
}

//add 5s to timer
function addTime() {
  time += 5
}
 
//input event listener
text.addEventListener("input", function() {
  if (text.value === word.textContent) {
    text.value = ""
    randomizeWord()
    updateScore()
    addTime()
  }
})