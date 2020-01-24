let currentSlide = -1;
let points = 0;
const myQuestions = [
  {
    question: "Where is this? 1/10",
    picture: "pictures/Berlin,Germany.jpg",
    answers: {
      a: "Berlin",
      b: "Bruxelles",
      c: "London"
    },
    correctAnswer: "Berlin"
  },

  {
    question: "Where is this? 2/10",
    picture: "pictures/Koln, Germany.jpg",
    answers: {
      a: "Humburg",
      b: "Frankfurt",
      c: "Köln"
    },
    correctAnswer: "Köln"
  },

  {
    question: "Where is this? 3/10",
    picture: "pictures/Rio de Janeiro, Brazil.jpg",
    answers: {
      a: "New York",
      b: "Rio de Janeiro",
      c: "Cancún"
    },
    correctAnswer: "Rio de Janeiro"
  },

  {
    question: "Where is this? 4/10",
    picture: "pictures/Kuala Lumpur, Malaysia.jpeg",
    answers: {
      a: "Macao",
      b: "Taipei",
      c: "Kuala Lumpur"
    },
    correctAnswer: "Kuala Lumpur"
  },

  {
    question: "Where is this? 5/10",
    picture: "pictures/Helsinki.jpg",
    answers: {
      a: "Copenhagen",
      b: "Helsinki",
      c: "Oslo"
    },
    correctAnswer: "Helsinki"
  },

  {
    question: "Where is this? 6/10",
    picture: "pictures/NY.jpg",
    answers: {
      a: "Tokyo",
      b: "Dubai",
      c: "New York"
    },
    correctAnswer: "New York"
  },

  {
    question: "Where is this? 7/10",
    picture: "pictures/Barcelona, Spain.jpg",
    answers: {
      a: "Lisbon",
      b: "Barcelona",
      c: "Casablanca"
    },
    correctAnswer: "Barcelona"
  },

  {
    question: "Where is this? 8/10",
    picture: "pictures/Singapore.jpeg",
    answers: {
      a: "Singapore",
      b: "Bangkok",
      c: "Manila"
    },
    correctAnswer: "Singapore"
  },

  {
    question: "Where is this? 9/10",
    picture: "pictures/Cairo.jpeg",
    answers: {
      a: "Istanbul",
      b: "Cairo",
      c: "Mumbai"
    },
    correctAnswer: "Cairo"
  },

  {
    question: "Where is this? 10/10",
    picture: "pictures/Sydney,AUS.jpeg",
    answers: {
      a: "Sydney",
      b: "Honolulu",
      c: "Manila"
    },
    correctAnswer: "Sydney"
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

//
/* function finishQuiz() {
  const quizPage = document.getElementById("quiz-page");
  const startPage = document.getElementById("start-page");
  const resultPage = document.getElementById("result-page");
  if (myQuestions[currentSlide] <= 4) {
    quizPage.style.display = "none";
    startPage.style.display = "none";
    resultPage.style.display = "block";
  }
}
 */
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
  const quizPage = document.getElementById("quiz-page");
  const startPage = document.getElementById("start-page");
  const resultPage = document.getElementById("result-page");
  let resultContainer = document.getElementById("resultContainer");
  quizPage.style.display = "none";
  startPage.style.display = "block";
  resultPage.style.display = "none";
  resultContainer.innerHTML = "";
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
/* let num;
function getRandomNum(num) {
  return Math.floor(Math.random() * Math.floor(num));
}
console.log(getRandomNum(100)); */

//go to next question function
function showNextSlide() {
  clearInterval(id);
  countdown();
  let firstAnswer = document.getElementById("first-answer");
  let secondAnswer = document.getElementById("second-answer");
  let thirdAnswer = document.getElementById("third-answer");
  firstAnswer.style.color = "rgb(92, 83, 83)";
  secondAnswer.style.color = "rgb(92, 83, 83)";
  thirdAnswer.style.color = "rgb(92, 83, 83)";
  const showAns = document.getElementById("answer");
  showAns.innerHTML = "";
  if (currentSlide + 1 < myQuestions.length) {
    currentSlide += 1;
    //console.log(currentSlide, myQuestions.length);
    showSlide(myQuestions[currentSlide]);
  } else if (currentSlide < myQuestions.length) {
    showResultPage();
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
  firstAnswer.style.color = "rgb(92, 83, 83)";
  secondAnswer.style.color = "rgb(92, 83, 83)";
  thirdAnswer.style.color = "rgb(92, 83, 83)";
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

//show answer after push submit button
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", showAnswer);

let firstAnswer = document.getElementById("first-answer");
let secondAnswer = document.getElementById("second-answer");
let thirdAnswer = document.getElementById("third-answer");

function showAnswer() {
  clearInterval(id);
  let resultContainer = document.getElementById("resultContainer");

  let showAns = document.getElementById("answer");
  //console.log(showAns.innerText);
  let resetImage = document.getElementById("quiz-image");

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

  //console.log(document.querySelectorAll(".reply"));
  showAns.innerHTML = myQuestions[currentSlide].correctAnswer;
  document.querySelectorAll(".reply").forEach(elem => {
    if (elem.checked) {
      if (
        elem.nextElementSibling.innerText.toLowerCase() ===
        showAns.innerHTML.toLowerCase()
      ) {
        //console.log("eureka");
        points += 1;
      } else {
        /*  console.log(elem.nextElementSibling.innerText.toLowerCase());
        console.log(showAns.innerHTML.toLowerCase()); */
        //console.log("sorry you are a　loser");
      }
    }
  });
  console.log(points);
  resultContainer.innerHTML = points + "/10";
  document.querySelector("#quiz-image").style.filter = "blur(0)";
}

//count result
/* function countResult() {
  let resultContainer = document.getElementById("resultContainer");
  let resultArray = 0;
  if (
    myQuestions[currentSlide].answers.checked ==
    myQuestions[currentSlide].correctAnswer
  ) {
    resultArray++;
  }
  //for (i = 0; i <= 3; 1++)

  resultContainer.innerHTML = resultArray.toString;
} */

/* function countResult() {
  let resultContainer = document.getElementById("resultContainer");
  let resultArray = 0;
  let trueAnswer = newArr(
    myQuestions[0].answers.a,
    myQuestions[1].answers.b,
    myQuestions[2].answers.a
  );
  for (i = 0; i <= 3; 1++)
    if (myQuestions[trueAnswer[i]].checked) {
      resultArray++;
    }
  resultContainer.innerHTML = resultArray.toString;
}
 */
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
startButton.addEventListener("click", () => {
  countdown();
  showNextSlide();
});
resultPage.addEventListener("click", showResultPage);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

goBackToStartPage.forEach(element => {
  element.addEventListener("click", goBackToStart);
});
//submitButton.addEventListener("click", showAnswer);
