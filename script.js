let currentSlide = 0;

const myQuestions = [
  {
    question: "Where is this(city)?",
    picture: "pictures/Berlin,Germany.jpg",
    answers: {
      a: "Berlin",
      b: "Paris",
      c: "London"
    },
    correctAnswer: "Berlin"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/Paris,France.jpeg",
    answers: {
      a: "Berlin",
      b: "Paris",
      c: "London"
    },
    correctAnswer: "b: Paris"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/Köln, Germany.jpg",
    answers: {
      a: "Köln",
      b: "Paris",
      c: "Humburg"
    },
    correctAnswer: "a: Köln"
  }
];

//countdown timer
var countdown = function() {
  var count = 20;

  document.getElementById("timer").textContent = count.toString();
  // console.log(count--);
  var id = setInterval(function() {
    document.getElementById("timer").textContent = count.toString();
    let blurVal = count / 2;
    // console.log(blurVal);
    document.querySelector("#quiz-image").style.filter = `blur(${blurVal}px)`;
    // countdown();
    // console.log(count);
    if (count <= 0) {
      clearInterval(id); //idをclearIntervalで指定しているd
    }
    count--;
  }, 1000);
};

// countdown();

//blur picture function -> haven't fixed yet
function imageBlur() {
  const blurNum = 40;
  for (var i = 0; i <= 20; i++) {}
}

//Go to quiz page from start page
document.getElementById("quiz-page").style.display = "none";
document.getElementById("start-page").style.display = "block";
document.getElementById("result-page").style.display = "none";

function showQuizPage() {
  const quizPage = document.getElementById("quiz-page");
  const startPage = document.getElementById("start-page");
  const resultPage = document.getElementById("result-page");
  if (quizPage.style.display == "block") {
    quizPage.style.display = "none";
    resultPage.style.display = "none";
  } else {
    quizPage.style.display = "block";
    startPage.style.display = "none";
  }
}

//Go to result page from quiz page
function showResultPage() {
  const quizPage = document.getElementById("quiz-page");
  const startPage = document.getElementById("start-page");
  const resultPage = document.getElementById("result-page");

  quizPage.style.display = "none";
  startPage.style.display = "none";
  resultPage.style.display = "block";
}

//go back to start page
function goBackToStart() {
  const quizPage = document.getElementById("quiz-page");
  const startPage = document.getElementById("start-page");
  const resultPage = document.getElementById("result-page");

  quizPage.style.display = "none";
  startPage.style.display = "block";
  resultPage.style.display = "none";
}

//go back to start page
function goBackToStart() {
  console.log("HELOOOOOOO");
  const quizPage = document.getElementById("quiz-page");
  const startPage = document.getElementById("start-page");
  const resultPage = document.getElementById("result-page");

  quizPage.style.display = "none";
  startPage.style.display = "block";
  resultPage.style.display = "none";
}

//switch questions function
function showSlide(curSlide) {
  //console.log(`Hello`);
  let quizImage = document.getElementById("quiz-image");
  let questionTitle = document.getElementById("quiz-title");
  let quizAnswer = document.getElementById("quiz-answer");
  let firstAnswer = document.getElementById("first-answer");
  let secondAnswer = document.getElementById("second-answer");
  let thirdAnswer = document.getElementById("third-answer");

  quizImage.src = curSlide.picture;
  questionTitle.innerHTML = curSlide.question;
  //quizAnswer.innerHTML = curSlide.answers;
  firstAnswer.innerHTML = curSlide.answers.a;
  secondAnswer.innerHTML = curSlide.answers.b;
  thirdAnswer.innerHTML = curSlide.answers.c;
}

//go to next question function
function showNextSlide() {
  const showAns = document.getElementById("answer");
  showAns.innerHTML = "";
  if (currentSlide + 1 < myQuestions.length) {
    currentSlide += 1;
    //console.log(currentSlide, myQuestions.length);
    showSlide(myQuestions[currentSlide]);
  } else {
    return;
  }
}

//go back to previous question
function showPreviousSlide() {
  const showAns = document.getElementById("answer");
  showAns.innerHTML = "";
  if (currentSlide > 0) {
    currentSlide -= 1;
    showSlide(myQuestions[currentSlide]);
  } else {
    return;
  }
}

//show answer after push submit button 木曜日！！！！！！！！！！！！
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", showAnswer);

function showAnswer() {
  const showAns = document.getElementById("answer");
  showAns.innerHTML = myQuestions[currentSlide].correctAnswer;
}

// getElement
const goQuizPageButton = document.getElementById("quiz-page");
const startButton = document.getElementById("start-page");
const resultPage = document.getElementById("result");
const goBackToStartPage = document.querySelectorAll(".goback");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
//const slides = document.querySelectorAll(".slide");
//const submitButton = document.getElementById("submit");

//showSlide(currentSlide);
// function showNextSlideAndCountdown() {
//   showNextSlide();
//   countdown();
// }
// All Eventlisteners here
//goQuizPageButton.addEventListener("click", showQuizPage);
startButton.addEventListener("click", countdown);
resultPage.addEventListener("click", showResultPage);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

goBackToStartPage.forEach(element => {
  element.addEventListener("click", goBackToStart);
});
//submitButton.addEventListener("click", showAnswer);
