//Variables
var correctAnswer = 0;
var wrongAnser = 0;
var noAnswer = 0;
var timer = 60;
var intervalId;

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
});

//Timer functions
function startClock() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    if (timer < 1) {
        clearInterval(intervalId);
    }
    $("#count-down").html("Time Remaining: " + timer); 
}

//Display Questions
function displayQuestions() {
    
}


