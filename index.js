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

 let questionsP = document.getElementById("questions")     

 questionsP.textContent = `${myQuestions[0].Question}`

console.log(questionsP)

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