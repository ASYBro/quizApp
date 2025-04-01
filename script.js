const questions = [
  {
    question: " What does the DRY principle stand for?",
    answers: [
      { text: "Do not Repeat Yourself", correct: true },
      { text: "Debugging Requires You", correct: false },
      { text: "Do Run Your code", correct: false },
      { text: "Data Readability Yield", correct: false },
    ],
  },
  {
    question: " What is the main goal of the KISS principle in coding?",
    answers: [
      { text: "Keep It Secure & Safe", correct: false },
      { text: " Keep It Simple, Stupid", correct: true },
      { text: "Keep It Structured & Scalable", correct: false },
      { text: "Keep It Speedy & Strong", correct: false },
    ],
  },
  {
    question: " What does the YAGNI principle suggest?",
    answers: [
      { text: "You Always Get New Ideas", correct: false },
      {
        text: "  Your Algorithm Grows Neatly and Intelligently",
        correct: false,
      },
      { text: "You Ain't Gonna Need It", correct: true },
      { text: "Your Application Goes Naturally in Iterations", correct: false },
    ],
  },
  {
    question: " In the SOLID principles, what does 'S' stand for?",
    answers: [
      { text: "Simple Code", correct: false },
      { text: "Single Responsibility", correct: true },
      { text: "Secure Programming", correct: false },
      { text: "Structured Objects", correct: false },
    ],
  },
  {
    question: " Why is writing readable code important?",
    answers: [
      { text: " Because it looks cool", correct: false },
      { text: "Only beginners need to write readable code", correct: false },
      { text: " It makes debugging and collaboration easier", correct: true },
      { text: "It makes the code run faster", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = " NEXT";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }
}

startQuiz();
