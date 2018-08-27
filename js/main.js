window.addEventListener("load", init);

//Globals
//avliable levels

const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

//to change levels
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;
let highScore = 0;

//DOM elements

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const highScoreDisplay = document.querySelector("#high-score");

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "joke",
  "runaway",
  "developer",
  "cocktail",
  "main",
  "visual",
  "Studio",
  "code",
  "lenovo",
  "webcam",
  "problems",
  "speed",
  "outline",
  "programming",
  "encourage",
  "JavaScript",
  "HTML5",
  "framework",
  "libraries",
  "build",
  "addidas",
  "Nike",
  "Apple",
  "subscribed",
  "siblings",
  "instructions",
  "document"
];

// initialize game
function init() {
  // load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // call coundown every second
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 50);
}

// start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}
// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}
// pick and show random word
function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];
}
// countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // decrease time
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    if (score > highScore) {
      highScoreDisplay.innerHTML = score;
    } else {
      return false;
    }
    score = -1;
  }
}
