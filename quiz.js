var question = document.querySelector(".quiz-container");
var btn = document.querySelector("#submit-button");
var output = document.querySelector("#output");


var correctAnswers = ["90°","right-angle"]



function quizProcess (){
 var score = 0;
 var i = 0;
 var data = new FormData(question);
 for(var value of data.values() ) {
     if (value === correctAnswers[i]) {
        score++;
     }
     i++;
 }
 
 
 output.innerText = "Your score is " + score;

}




btn.addEventListener("click", quizProcess );