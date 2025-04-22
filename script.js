const questions = [
  { question: "Coffee or Tea?", choiceA: "Coffee", choiceB: "Tea" },
  { question: "Beach or Mountains?", choiceA: "Beach", choiceB: "Mountains" },
  { question: "Android or iOS?", choiceA: "Android", choiceB: "iOS" },
  { question: "Cats or Dogs?", choiceA: "Cats", choiceB: "Dogs" },
  { question: "Books or Movies?", choiceA: "Books", choiceB: "Movies" }
];

let currentIndex = 0;
let userChoices = [];

const questionEl = document.getElementById("question");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

function showQuestion() {
  const current = questions[currentIndex];
  questionEl.textContent = current.question;
  choiceA.textContent = current.choiceA;
  choiceB.textContent = current.choiceB;
}

function handleChoice(choice) {
  userChoices.push({ question: questions[currentIndex].question, selected: choice });
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".card").style.display = "none";
  result.style.display = "block";
  restartBtn.style.display = "inline-block";
  let resultText = "✅ You completed the quiz!<br><br>";
  userChoices.forEach(choice => {
    resultText += `<strong>${choice.question}</strong> ➜ <em>${choice.selected}</em><br>`;
  });
  result.innerHTML = resultText;
}

function restartQuiz() {
  currentIndex = 0;
  userChoices = [];
  result.style.display = "none";
  restartBtn.style.display = "none";
  document.querySelector(".card").style.display = "block";
  showQuestion();
}

choiceA.addEventListener("click", () => handleChoice(choiceA.textContent));
choiceB.addEventListener("click", () => handleChoice(choiceB.textContent));
restartBtn.addEventListener("click", restartQuiz);

showQuestion();
