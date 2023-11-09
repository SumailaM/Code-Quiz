const quizContainer = document.getElementById("quizContainer");
const startButton = document.getElementById("startButton");
const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const endScreen = document.getElementById("endScreen");
const scoreElement = document.getElementById("score");
const initialsInput = document.getElementById("initials");
const saveScoreButton = document.getElementById("saveScore");
const viewHighScoresButton = document.getElementById("viewHighScores");
const highScoresList = document.getElementById("highScoresList");

let quizQuestions = []; 
let timer;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60; // Used to set time
