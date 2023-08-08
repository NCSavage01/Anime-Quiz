
//make instructions appear when click button
//  alert??? 

//Make README.md fit the template that's in the Widget



//Fix main functionality
//Change score total score maybe with message ???


const myQuestions = [
  {
    Question: "What anime is this logo from?",
    imageURL: (src = `assets/images/AOT-image.jpg`),
    imageAlt: "Attack on titan logo",
    Answers: {
      A: "Naruto",
      B: "Fairy Tail",
      C: "Dragon Ball Z",
      D: "Attack on titan",
    },
    CorrectAnswer: "D",
  },

  {
    Question: "Finish the phrase: 'It's time to go beyond _____'?",
    Answers: {
      A: "Plus Ultra My Hero Academia",
      B: " My Limit Fairy Tail",
      C: "Strength Dragon Ball Z",
      D: "Hell Re-zero",
    },
    CorrectAnswer: "A",
  },
  {
    Question: "Finish the phrase: 'Because it's my ____ way!'?",
    Answers: {
      A: " Hero My Hero Academia",
      B: "Magic Fairy Tail",
      C: "Kai Dragon Ball Z",
      D: " Ninja Naruto",
    },
    CorrectAnswer: "D",
  },
  {
    Question: "What series is this character from ?",
    Answers: {
      A: "Bleach",
      B: "Hells Paradise",
      C: "Dragon Ball Z",
      D: "Dark Gathering",
    },
    CorrectAnswer: "A",
  },
];

let start = document.getElementById("Start");

let score = 0;

let scoreShow = document.getElementById("Score");

scoreShow.innerHTML = `Score: ${score}`;

let questionsP = document.getElementById("Questions");

let answerQuestion = start.addEventListener("click", function () {
  //want questions and answers to show up in Questions div
  questionsP.innerHTML = `  
  <div id="question1">${myQuestions[0].Question}</div>
  <img height="175" width="175" src=${myQuestions[0].imageURL} </img>
  <div id="choice1a">${myQuestions[0].Answers.A}</div>
  <div id="choice1b">${myQuestions[0].Answers.B}</div>
  <div id="choice1c">${myQuestions[0].Answers.C}</div>
  <div id="choice1d">${myQuestions[0].Answers.D}</div>
  <button id="next1">Next</button>
  `;

  let answer1A = document.getElementById("choice1a");
  let answer1B = document.getElementById("choice1b");
  let answer1C = document.getElementById("choice1c");
  let answer1D = document.getElementById("choice1d");

  answer1A.addEventListener("click", (e) => {
    if ((e.target.id = "choice1a")) {
      // score = score + 100
      answer1A.style.color = "red";
      answer1B.style.color = "red";
      answer1C.style.color = "red";
      answer1D.style.color = "green";
    }
  });

  answer1B.addEventListener("click", (e) => {
    if ((e.target.id = "choice1b")) {
      // score = score + 100
      answer1A.style.color = "red";
      answer1B.style.color = "red";
      answer1C.style.color = "red";
      answer1D.style.color = "green";
    }
  });
  answer1C.addEventListener("click", (e) => {
    if ((e.target.id = "choice1c")) {
      // score = score + 100
      answer1A.style.color = "red";
      answer1B.style.color = "red";
      answer1C.style.color = "red";
      answer1D.style.color = "green";
    }
  });

  answer1D.addEventListener("click", (e) => {
    if ((e.target.id = "choice1d")) {
      // score = score + 100
      answer1A.style.color = "red";
      answer1B.style.color = "red";
      answer1C.style.color = "red";
      answer1D.style.color = "green";
      scoreShow.innerHTML = `Score: ${(score += 100)}`;
    }
  });

  let nextButton1 = document.getElementById("next1");
  console.log(nextButton1, "button1");
  nextButton1.addEventListener("click", () => {
    questionsP.innerHTML = `  
    <div id="question2">${myQuestions[1].Question}</div>
    <div id="choice2a">${myQuestions[1].Answers.A}</div>
    <div id="choice2b">${myQuestions[1].Answers.B}</div>
    <div id="choice2c">${myQuestions[1].Answers.C}</div>
    <div id="choice2d">${myQuestions[1].Answers.D}</div>
    <button id="next2">Next</button>
    `;

    let answer2A = document.getElementById("choice2a");
    let answer2B = document.getElementById("choice2b");
    let answer2C = document.getElementById("choice2c");
    let answer2D = document.getElementById("choice2d");

    answer2A.addEventListener("click", (e) => {
      if ((e.target.id = "choice2a")) {
        // score = score + 100
        answer2A.style.color = "green";
        answer2B.style.color = "red";
        answer2C.style.color = "red";
        answer2D.style.color = "red";
        scoreShow.innerHTML = `Score: ${(score += 100)}`;
      }
    });

    answer2B.addEventListener("click", (e) => {
      if ((e.target.id = "choice2b")) {
        // score = score + 100
        answer2A.style.color = "green";
        answer2B.style.color = "red";
        answer2C.style.color = "red";
        answer2D.style.color = "red";
      }
    });
    answer2C.addEventListener("click", (e) => {
      if ((e.target.id = "choice2c")) {
        // score = score + 100
        answer2A.style.color = "green";
        answer2B.style.color = "red";
        answer2C.style.color = "red";
        answer2D.style.color = "red";
      }
    });

    answer2D.addEventListener("click", (e) => {
      if ((e.target.id = "choice2d")) {
        // score = score + 100
        answer2A.style.color = "green";
        answer2B.style.color = "red";
        answer2C.style.color = "red";
        answer2D.style.color = "red";
      }
    });

    let nextButton2;

    nextButton2 = document.getElementById("next2");
    nextButton2.addEventListener("click", (e) => {
    questionsP.innerHTML = `  
    <div id="question3">${myQuestions[2].Question}</div>
    <div id="choice3a">${myQuestions[2].Answers.A}</div>
    <div id="choice3b">${myQuestions[2].Answers.B}</div>
    <div id="choice3c">${myQuestions[2].Answers.C}</div>
    <div id="choice3d">${myQuestions[2].Answers.D}</div>
    `;
  });
  // });
});
});

function thirdChoice() {
  
  let answer3A = document.getElementById("choice3a");
  console.log(answer3A)
  let answer3B = document.getElementById("choice3b");
  let answer3C = document.getElementById("choice3c");
  let answer3D = document.getElementById("choice3d");
  
  answer3A.addEventListener("click", (e) => {
    if ((e.target.id = "choice3a")) {
      // score = score + 100
      answer3A.style.color = "red";
      answer3B.style.color = "red";
      answer3C.style.color = "red";
      answer3D.style.color = "green";
    }
  });
  
  answer3B.addEventListener("click", (e) => {
    if ((e.target.id = "choice3a")) {
      // score = score + 100
      answer3A.style.color = "red";
      answer3B.style.color = "red";
      answer3C.style.color = "red";
      answer3D.style.color = "green";
    }
  });
  
  answer3C.addEventListener("click", (e) => {
    if ((e.target.id = "choice3a")) {
      // score = score + 100
      answer3A.style.color = "red";
      answer3B.style.color = "red";
      answer3C.style.color = "red";
      answer3D.style.color = "green";
    }
  });

  answer3D.addEventListener("click", (e) => {
    if ((e.target.id = "choice3d")) {
      // score = score + 100
      answer3A.style.color = "red";
      answer3B.style.color = "red";
      answer3C.style.color = "red";
      answer3D.style.color = "green";
      scoreShow.innerHTML = `Score: ${(score += 100)}`;
    }
  });
}

thirdChoice()
// let nextButton3 = document.getElementById("next3")
// nextButton3.addEventListener("click", () => {
  //   questionsP.innerHTML = `
//   <div id="question3">${myQuestions[2].Question}</div>
//   <div id="choice3a">${myQuestions[2].Answers.A}</div>
//   <div id="choice3b">${myQuestions[2].Answers.B}</div>
//   <div id="choice3c">${myQuestions[2].Answers.C}</div>
//       <div id="choice3d">${myQuestions[2].Answers.D}</div>
//       <button id="next3">Next</button>
//             `;

// });

//_____________________________________________________________

// go to next question unless it's the last question

// if

//change the answer color to red

//calls this function:    maybe later
//changeColor()

//if answer choice is clicked
// then the color o fthe answer choice becomes red

// shows solution message ... strecth
// });
// let answer = document.getElementById("See Solution")
// let Answers = start.addEventListener("click", '1a'{
//     console.log("A")
//     let CorrectAnswer = document.getElementById("Answer")
// });

// function changeColor () {

//once user hits wrong answer changecolor to red, when right answer clicked changecolor to green
// display next question

// }

// console.log(questionsP)

//  questionsP.textContent = "hello"

// {Question: "Finish the phrase: 'It's time to go beyond _____'?",
// Answers: {
//     A: 'My Hero Academia' ,
//     B: 'Fairy Tail' ,
//     C: 'Dragon Ball Z' ,
//     D: 'Re-zero'
// },
// CorrectAnswer: 'A'
// },
// ];

// {Question: "Finish the phrase: 'Because it's my ____ way!'?",
// Answers: {
//     A: 'My Hero Academia' ,
//     B: 'Fairy Tail' ,
//     C: 'Dragon Ball Z' ,
//     D: 'Naruto'
// },
// CorrectAnswer: 'A'
// },

// {Question: "What series is this character from ?",
// Answers: {
//     A: 'My Hero Academia' ,
//     B: 'K' ,
//     C: 'Dragon Ball Z' ,
//     D: 'Re-zero'
// },
// CorrectAnswer: 'A'
// },

// {Question: "Who is truck-kun?",
// Answers: {
//     A: 'A truck thats kills anime characters' ,
//     B: 'A truck that delivers to local stores' ,
//     C: 'A truck that brings public transportation' ,
//     D: 'All of the above'
// },
// CorrectAnswer: 'A'
// },

// {Question: "What series is this character from ?",
// Answers: {
//     A: 'Bleach' ,
//     B: 'Hells Paradise' ,
//     C: 'Dragon Ball Z' ,
//     D: 'Dark Gathering'
// },
// CorrectAnswer: 'A'
// },

// {Question: "What anime opening has a blue bird?",
// Answers: {
//     A: 'My Hero Academia' ,
//     B: 'Naruto' ,
//     C: 'Dragon Ball Z' ,
//     D: 'Re-zero'
// },
// CorrectAnswer: 'B'
// },

// {Question: "Do you fight a character that is always smiling?",
// Answers: {
//     A: 'Yes, because they are weak' ,
//     B: 'Yes, because they are joking ' ,
//     C: 'No,because they are a absolute menace ' ,
//     D: 'No, just because you about to die'
// },
// CorrectAnswer: 'C'
// },
// {Question: "'?",
// Answers: {
//     A: 'My Hero Academia' ,
//     B: 'Fairy Tail' ,
//     C: 'Dragon Ball Z' ,
//     D: 'Re-zero'
// },
// CorrectAnswer: 'A'
// },
// function startQuestions(){
// console.log(myQuestions[0].Question)

// function GetAnswers(myQuestions) {
//     return Answers;
//   }
//   function BeginQuiz(myQuestions, answerForQuestions)
//   const answerForQuestions = document.getElementById("Answers");

// function start(){

// }

//question and answers choices appear when you click start

//loop over the questions array,
// for each question we'll have a condition

// call a function that lets you answer the quesiton
// if the answer that user clicks on is correct, then ....
/// if not correct, then ....
