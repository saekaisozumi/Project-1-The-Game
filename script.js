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

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

/* クイズを作成する関数 */
function buildQuiz() {
  const quizOutPut = [];
  //HTML出力を格納する変数Quizoutputを用意。この変数に質問と解答の選択肢を入力します
  //それぞれの質問のHTMLを生成するために、forEachループで順番に質問を処理します。
  myQuestions.forEach(function(currentQuestion, questionNum) {
    //現在の値とインデックスが必要で、それぞれcurrentQuestionとquestionNumと名付けています
    // here goes the code we want to run for each question
    const answers = [];
    for (words in currentQuestion.answers) {
      answers.push(
        `<label>
        <input type="radio" name="question${questionNum}" value="${words}">
        ${words}:
        ${currentQuestion.answers[words]}
        </label>`
      );
    }
    quizOutput.push(
      `<div class = "question">${currentQuestion.question}</div>
      <div class = "answers">${answers.join("")}</div>`
    );
  });

  quizContainer.innerHTML = quizOutput.join("");
}

/* 結果を表示する関数 */
function showResult() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let correctNum = 0;
  myQuestions.forEach(function(currentQuestion, questionNum) {
    const answerContainer = answerContainers[questionNum];
    const selector = "input[name=question" + questionNum + "]:checked";
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      correctNum++;
    }
  });
  resultContainer.innerHTML = correctNum + "out of" + myQuestions.length;
}

/* クイズをすぐに表示する */
buildQuiz();

/* submitボタンを押した後、結果を表示する */
submitButton.addEventListener("click", showResult);

let myQuestions = [
  {
    question: "Where is this?",
    picture: "pictures/Berlin,Germany.jpg",
    answers: {
      1: "Berlin",
      2: "Paris",
      3: "London"
    },
    correctAnswer: 1
  },

  {
    question: "Where is this?",
    picture: "pictures/Paris,France.jpeg",
    answers: {
      1: "Berlin",
      2: "Paris",
      3: "London"
    },
    correctAnswer: 2
  },

  {
    question: "Where is this?",
    picture: "pictures/Köln, Germany.jpg",
    answers: {
      1: "Köln",
      2: "Paris",
      3: "Humburg"
    },
    correctAnswer: 1
  }
];

/* var counts = 20;
var countdown1 = function() {
  let theStarDiv = document.getElementByClass("star1");

  if (counts > 15) {
    console.log(theStarDiv);
    theStarDiv.innerText = "✈️✈︎✈︎✈︎";
  } else if (counts > 11) {
    console.log(theStarDiv);
    theStarDiv.innerText = "✈️✈︎✈︎";
  } else if (counts > 6) {
    console.log(theStarDiv);
    theStarDiv.innerText = "✈️✈︎";
  } else if (counts > 0) {
    console.log(theStarDiv);
    theStarDiv.innerText = "✈️";
  }
  var id = setTimeout(countdown, 1000);
  if (counts < 0) {
    clearTimeout(id);
  }
};
countdown1(); */

/* let counts = 20;
let theStar;
const intervalId = setInterval(function() {
  if (counts > 15) {
    theStar = document.getElementsByClassName("Stars");
    document.removeClass("star1");
  } else {
    console.log("hosi");
    clearInterval(intervalId);
  }
  counts--;
}, 1000); */

/* var starRemove = function() {
  let theStar = document.getElementsByClassName(".stars");
  if (countdown < 15) {
    parent.removeChild(theStar);
  }
};
 */
