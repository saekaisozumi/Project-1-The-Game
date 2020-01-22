/* countdown timer */
var count = 20;
var countdown = function() {
  document.getElementById("timer").textContent = count.toString();
  console.log(count--);
};
var id = setInterval(function() {
  countdown();
  if (count < 0) {
    clearInterval(id); //idをclearIntervalで指定している
  }
}, 1000);

countdown();

/* クイズを作成する関数 */

function buildQuiz() {
  const quizOutPut = [];
  const imageOutPut = [];
  myQuestions.forEach(function(currentQuestion, questionNum) {
    const answers = [];
    for (word in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNum}" value="${word}">
          ${word}　:
          ${currentQuestion.answers[word]}
          </label>`
      );
    }
    imageOutPut.push(`<img src="${currentQuestion.picture}" alt="" srcset="">`);

    quizOutPut.push(
      `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>`
    );
  });
  imageContainer.innerHTML = imageOutPut.join("");
  quizContainer.innerHTML = quizOutPut.join("");
}

/* 画像の透明度を変える関数 */
function imageBlur() {
  const blurNum = 40;
  for (var i = 0; i <= 20; i++) {}
}

/* 結果を表示する関数 */
function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let correctNum = 0;
  myQuestions.forEach(function(currentQuestion, questionNum) {
    const answerContainer = answerContainers[questionNum];
    const selector = `input[name=question${questionNum}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      correctNum++;
    }
  });
  resultsContainer.innerHTML = correctNum + "out of" + myQuestions.length;
}

/* All DOM */
const imagePicture = document.getElementById("img");
const imageContainer = document.getElementById("img");
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  {
    question: "Where is this?",
    picture: "pictures/Berlin,Germany.jpg",
    answers: {
      a: "Berlin",
      b: "Paris",
      c: "London"
    },
    correctAnswer: "a"
  },

  {
    question: "Where is this?",
    picture: "pictures/Paris,France.jpeg",
    answers: {
      a: "Berlin",
      b: "Paris",
      c: "London"
    },
    correctAnswer: "b"
  },

  {
    question: "Where is this?",
    picture: "pictures/Köln, Germany.jpg",
    answers: {
      a: "Köln",
      b: "Paris",
      c: "Humburg"
    },
    correctAnswer: "a"
  }
];

/* クイズをすぐに表示する */
buildQuiz();

/* submitボタンを押した後、結果を表示する */
submitButton.addEventListener("click", showResults);
