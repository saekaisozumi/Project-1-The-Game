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
      a: "Berlin  nnnnn",
      b: "Paris",
      c: "London"
    },
    correctAnswer: "Paris"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/Köln, Germany.jpg",
    answers: {
      a: "Köln",
      b: "Frankfurt",
      c: "Humburg"
    },
    correctAnswer: "Köln"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/Kuala Lumpur, Malaysia.jpeg",
    answers: {
      a: "Tokyo",
      b: "Taipei",
      c: "Kuala Lumpur"
    },
    correctAnswer: "Kuala Lumpur"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/oslo, Norway.jpg",
    answers: {
      a: "Copenhagen",
      b: "Oslo",
      c: "Helsinki"
    },
    correctAnswer: "Oslo"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/rome, italy.jpg",
    answers: {
      a: "Köln",
      b: "Paris",
      c: "Humburg0000000"
    },
    correctAnswer: "a: Köln"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/Seoul, South Korea.jpg",
    answers: {
      a: "Köln",
      b: "Paris",
      c: "Humburg0000000"
    },
    correctAnswer: "a: Köln"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/Singapore.jpeg",
    answers: {
      a: "Köln",
      b: "Paris",
      c: "Humburg0000000"
    },
    correctAnswer: "a: Köln"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/Taipei,Taiwan.jpg",
    answers: {
      a: "Köln",
      b: "Paris",
      c: "Humburg0000000"
    },
    correctAnswer: "a: Köln"
  },

  {
    question: "Where is this(city)?",
    picture: "pictures/Tokyo, Japan.jpeg",
    answers: {
      a: "Köln",
      b: "Paris",
      c: "Humburg0000000"
    },
    correctAnswer: "a: Köln"
  }
];

//countdown timer
//var countdown =
let id;

function countdown() {
  let count = 10;
  document.querySelector("#quiz-image").style.filter = `blur(${count}px)`;
  document.getElementById("timer").textContent = count.toString();
  // console.log(count--);
  id = setInterval(function() {
    document.getElementById("timer").textContent = count.toString();
    let blurVal = count * 0.7;
    // console.log(blurVal);
    document.querySelector("#quiz-image").style.filter = `blur(${blurVal}px)`;
    // countdown();
    // console.log(count);
    if (count < 0) {
      count = 10;

      clearInterval(id); //idをclearIntervalで指定している
      showNextSlide();
    }
    count--;
  }, 1000);
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

//make random number
let num;
function getRandomNum(num) {
  return Math.floor(Math.random() * Math.floor(num));
}
console.log(getRandomNum(100));

//go to next question function
function showNextSlide() {
  clearInterval(id);
  countdown();
  let firstAnswer = document.getElementById("first-answer");
  let secondAnswer = document.getElementById("second-answer");
  let thirdAnswer = document.getElementById("third-answer");
  firstAnswer.style.color = "black";
  secondAnswer.style.color = "black";
  thirdAnswer.style.color = "black";
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
  clearInterval(id);
  countdown();
  let firstAnswer = document.getElementById("first-answer");
  let secondAnswer = document.getElementById("second-answer");
  let thirdAnswer = document.getElementById("third-answer");
  firstAnswer.style.color = "black";
  secondAnswer.style.color = "black";
  thirdAnswer.style.color = "black";
  const showAns = document.getElementById("answer");
  showAns.innerHTML = "";
  if (currentSlide > 0) {
    currentSlide -= 1;
    showSlide(myQuestions[currentSlide]);
    //countdown();
  } else {
    return;
  }
}

//show answer after push submit button 木曜日！！！！！！！！！！！！
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", showAnswer);

/* function showAnswer() {
  clearInterval(id);
  const showAns = document.getElementById("answer");
  showAns.innerHTML = myQuestions[currentSlide].correctAnswer;
} */

function showAnswer() {
  console.log("WWWWWWWWWWWWWW");
  clearInterval(id);
  let firstAnswer = document.getElementById("first-answer");
  let secondAnswer = document.getElementById("second-answer");
  let thirdAnswer = document.getElementById("third-answer");
  let showAns = document.getElementById("answer");

  if (firstAnswer.textContent == myQuestions[currentSlide].correctAnswer) {
    firstAnswer.style.color = "red";
  } else if (
    secondAnswer.textContent == myQuestions[currentSlide].correctAnswer
  ) {
    secondAnswer.style.color = "red";
  } else if (
    thirdAnswer.textContent == myQuestions[currentSlide].correctAnswer
  ) {
    thirdAnswer.style.color = "red";
  }
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
