//Variables
var correctAnswer = 0;
var wrongAnser = 0;
var noAnswer = 0;
var question = 0;
var timer = 30;
var intervalId;
var userPick;

//Trivia Questions
var trivialPursuit = [{
    question: "What is the name of a camera move that combines a dolly and a zoom?",
    choice: ["Tracking", "Wide-Angle", "Zolly", "Dooly"],
    rightAnswer: 2,
},
{
    question: "A camera technique in Lord of the Rings enabled actors to appear Hobbit sized:",
    choice: ["Forced Perspective", "Low Angle Shot", "Zoom", "Pan"],
    rightAnswer: 0,
},
{
    question: "Who is the most filmed character in cinema history?",
    choice: ["Peter Pan", "Superman", "Snow White", "Dracula"],
    rightAnswer: 3,
},
{
    quesion: "Before shooting footage for his films, Alfred Hitchcock would plan the shots with:",
    choice: ["The actors", "Storyboards", "The Camera operators", "Nothing"],
    rightAnswer: 2,
}]

//Start Button
$("#start").on("click", function(){
    $(this).hide();
    startClock();
    displayQuestions();
});

//Timer functions
function startClock() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    if (timer <= 0) {
        clearInterval(intervalId);
        showScore();
        
    } 
    $("#count-down").html("Time Remaining: " + timer); 
}

//Display Questions
function displayQuestions() {
    $("#questions").append("<p>" + trivialPursuit[0].question + "</p>");
    question++;
}

//Show Score
function showScore() {
    $("#score-screen").text("Correct Answers: " + correctAnswer)
    $("#score-screen").text("Wrong Answers: " + wrongAnser)
    $("#score-screen").text("Unanswered: " + noAnswer)

}


