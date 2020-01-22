var count = 20;
var countdown = function() {
  document.getElementById("timer").textContent = count.toString();
  console.log(count--);
  var id = setTimeout(countdown, 1000);
  if (count < 0) {
    clearTimeout(id);
  }
};
countdown();

/* クイズを作成する関数 */

function buildQuiz() {
  const quizOutPut = [];
  myQuestions.forEach(function(currentQuestion, questionNum) {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNum}" value="${letter}">
          ${letter}　:
          ${currentQuestion.answers[letter]}
          </label>`
      );
    }

    quizOutPut.push(
      `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
    );
  });

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

//スライドを切り替える関数
function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;
  if (currentSlide === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

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

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

/* submitボタンを押した後、結果を表示する */
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
