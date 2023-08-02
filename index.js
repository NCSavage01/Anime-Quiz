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
    function GetAnswers(myQuestions) {
        return Answers;
      }
      function BeginQuiz(myQuestions, answerForQuestions)
      const answerForQuestions = document.getElementById("Answers");

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