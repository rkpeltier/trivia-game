$(document).ready(function() {

//Variables
var correctAnswer = 0;
var wrongAnser = 0;
var noAnswer = 0;
var timer = 60;

//Start Button
$("#start").on("click", function() {
    $(this).hide();
    timer = setInterval(1000);
    $("#count-down").html(timer);
});

//Trivia Questions
var triviaQuestion = [{
    question: "What is the name of a camera move that combines a dolly and a zoom?",
    multipleChoice: ["Pan", "Panovision", "Zolly", "Tracking"],
    answer: [2]
}, {

}

];

//Some Functions
function displayTrivia() {
    $("#questions").append(triviaQuestion);
}

displayTrivia();

});