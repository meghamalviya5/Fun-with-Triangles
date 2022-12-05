const quizForm = document.querySelector(".quiz-container");
const submitAnswerButton = document.querySelector("#submit-answer");
const outputElement = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  var score = 0;
  var index = 0;
  const formResults = new FormData(quizForm);
  for (var value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputElement.innerText = "Your score is " + score;
}

submitAnswerButton.addEventListener("click", calculateScore);
