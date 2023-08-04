//make if statements
//access questions and show questions div
//Start button as click triggers function that show the first question
const myQuestions =[
    {Question : "What anime is this opening from?", 
    Answers: {
        A: 'Naruto' ,
        B: 'Fairy Tail' ,
        C: 'Dragon Ball Z',
        D: 'Re-zero',
    },
    CorrectAnswer: 'D'
    },
    
    
    {Question: "Finish the phrase: 'It's time to go beyond _____'?", 
    Answers: {
        A: 'My Hero Academia' ,
        B: 'Fairy Tail' ,
        C: 'Dragon Ball Z' ,
        D: 'Re-zero'
    },
    CorrectAnswer: 'A' 
    },
    {Question: "Finish the phrase: 'Because it's my ____ way!'?", 
    Answers: {
        A: 'My Hero Academia' ,
        B: 'Fairy Tail' ,
        C: 'Dragon Ball Z' ,
        D: 'Naruto'
    },
    CorrectAnswer: 'A' 
    },
    ];




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




 let start = document.getElementById("Start")

let answerQuestion = start.addEventListener("click", function() {

  console.log("start works")

  //want questions and answers to show up in Questions div
  let questionsP = document.getElementById("Questions")     

  questionsP.innerHTML = `<p>${myQuestions[0].Question}</p>
  
  <div id="1">${myQuestions[0].Question}</div>
  <div id="1a">${myQuestions[0].Answers.A}</div>
  <div id="1b">${myQuestions[0].Answers.B}</div>
  <div id="1c">${myQuestions[0].Answers.C}</div>
  <div id="1d">${myQuestions[0].Answers.D}</div>
  `

  let answer1A = document.getElementById("1a")

  let answer1D = document.getElementById("1d")


answer1A.addEventListener("click", e => {

  if (e.target.id = "1a") {
    {else

      answer1A.style.color = "red"
      answerID.style.color = "green"
    

}

});





    //change the answer color to red


    //calls this function:    maybe later
    //changeColor()
   
   
    //if answer choice is clicked 
    // then the color o fthe answer choice becomes red

 


    // shows solution message ... strecth 





})

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



 //show the first question
 //if answer choice is clicked and it's correct ....
 //else if....

 //Add event listener that shows the solution at the button with
//with id of showSolution ... the eentlistener needs to be able to show the answer in the object

// const myQuestions =[
// {Question : "What anime is this opening from?", 
// Answers: {
//     A: 'Naruto' ,
//     B: 'Fairy Tail' ,
//     C: 'Dragon Ball Z' ,
//     D: 'Re-zero'
// },
// CorrectAnswer: 'D'
// },


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
// }