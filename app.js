
var questionIndex = 0;
var score = 0;
var timer = 0;
var questIndex = 0;
var startButton = document.getElementById("startButton");
var submitResults = document.getElementById("submitResults");
var quizBox = document.getElementById("quizBox");
var answerBoxA = document.getElementById("ansA");
var answerBoxB = document.getElementById("ansB");
var answerBoxC = document.getElementById("ansC");
var questionBox = document.getElementById("questionBox");
var timeDisplay = document.getElementById("timeDisplay");

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

startButton.addEventListener("click",function (){
        questionBox.append(questionList[0].question);
        var ansStringA = answerBoxA.append(questionList[0].answers.a);
        var ansStringB = answerBoxB.append(questionList[0].answers.b);
        var ansStringC = answerBoxC.append(questionList[0].answers.c);
        var timez = timeDisplay.append(countz);
        var countz = setInterval(function(){
            timer++;
            console.log(countz)
        }, 300);
        
        

        console.log(questionList[0].question)
    }
    

    
    
 ); 
 
 

   answerBoxA.addEventListener("click", function(){
        if (questionList.answers === true){
            alert("Correct!");
            score++;
            alert("Your score is " + score);
        } else {
            alert("Incorrect")
        }
        questionList++

    })

    answerBoxB.addEventListener("click", function(){
        if (questionList.correctAnswer === b){
            alert("Correct!");
            score++;
            alert("Your score is " + score);
        } else {
            alert("Incorrect")
        }

    })
    answerBoxC.addEventListener("click", function(){
        if (questionList.answers === true){
            alert("Correct!");
            score++;
            alert("Your score is " + score);
        } else {
            alert("Incorrect")
        }

    })


    





        

    




