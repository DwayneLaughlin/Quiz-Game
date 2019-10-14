
var questionIndex = 0;
var score = 0;
var timer = 0;
var questIndex = 0;
var startButton = document.getElementById("startButton");
var submitResults = document.getElementById("submitResults");
var quizBox = document.getElementById("quizBox");
var results = document.getElementById("results");
var questionList = [
     {
        question: "Arrays are stored between which symbols?",
        
        answers: {
            a: '{}',
            b: '[]',
            c: '..'
        },

        correctAnswer: "b"
    },

    {
        question: "Which one of the following is not part of a conditional statement?",
        answers: {
            a: 'else',
            b: 'else with',
            c: 'else if'
        },
        correctAnswer: "b",
    },
];

for(var i=0; i<questionList.length; i++){
  var userReply = quizBox.innerHTML = string;
  var string = JSON.stringify(questionList.question);
}



        

    






