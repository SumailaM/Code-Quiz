// Java script questions
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

let quizQuestions = []; // Add your JavaScript questions here
let timer;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60; // Used to set time

startButton.addEventListener("click", startQuiz);
saveScoreButton.addEventListener("click", saveHighScore);
viewHighScoresButton.addEventListener("click", viewHighScores);

function startQuiz() {
  quizQuestions = [
    // java script questons with the answers
    {
      question: "What does 'JS' stand for?",
      options: ["Java Syntax", "JavaScript", "Just Saying"],
      correctAnswer: "JavaScript",
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["v myVar;", "variable myVar;", "var myVar;"],
      correctAnswer: "var myVar;",
    },
    {
      question: "How do you write 'Hello, World!' in an alert box?",
      options: ["alert('Hello, World!');", "msgBox('Hello, World!');", "confirm('Hello, World!');", "prompt('Hello, World!');"],
      correctAnswer: "alert('Hello, World!');",
    },
    {
      question: "What does 'NaN' stand for in JavaScript?",
      options: ["New Assignment Notation", "Not a Number", "New Array Name", "Null and None"],
      correctAnswer: "Not a Number",
    },
    {
      question: "Which method is used to add one or more elements to the end of an array?",
      options: ["push()", "insert()", "append()", "addToEnd()"],
      correctAnswer: "push()",
    },
    {
      question: "What is the purpose of the 'addEventListener' method in JavaScript?",
      options: ["To delete an event", "To add a new event", "To update the document", "To attach an event handler to an element"],
      correctAnswer: "To attach an event handler to an element",
    },
    // 
  ];

  startButton.style.display = "none";
  quizContainer.style.display = "block";
  displayQuestion(currentQuestionIndex);
  startTimer();
}

function startTimer() {
  timer = setInterval(function () {
    if (timeLeft <= 0 || currentQuestionIndex >= quizQuestions.length) {
      endQuiz();
    } else {
      timerElement.textContent = `Time: ${timeLeft} seconds`;
      timeLeft--;
    }
  }, 1000);
}

function displayQuestion(index) {
  if (index >= quizQuestions.length) {
    endQuiz();
    return;
  }

  const questionData = quizQuestions[index];
  questionElement.textContent = questionData.question;
  optionsContainer.innerHTML = "";

  for (let i = 0; i < questionData.options.length; i++) {
    const optionButton = document.createElement("button");
    optionButton.textContent = questionData.options[i];
    optionButton.addEventListener("click", () => checkAnswer(optionButton.textContent));
    optionsContainer.appendChild(optionButton);
  }
}

function checkAnswer(userAnswer) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (userAnswer === currentQuestion.correctAnswer) {
    score += 10;
  } else {
    timeLeft -= 10;
    if (timeLeft < 0) timeLeft = 0;
  }

  currentQuestionIndex++;
  displayQuestion(currentQuestionIndex);
}

function endQuiz() {
  clearInterval(timer);
  timerElement.textContent = "Time's up!";
  quizContainer.style.display = "none";
  endScreen.style.display = "block";
  scoreElement.textContent = `Your Score: ${score}`;
}

function saveHighScore() {
  const initials = initialsInput.value.trim();
  if (initials) {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials, score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
  viewHighScores();
}
// allows you to see stored highscores
function viewHighScores() {
  endScreen.style.display = "none";
  highScoresList.innerHTML = "";
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.sort((a, b) => b.score - a.score);

  highScores.forEach((entry, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${entry.initials}: ${entry.score}`;
    highScoresList.appendChild(listItem);
  });

  highScoresPage.style.display = "block";
}
