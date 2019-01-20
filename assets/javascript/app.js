//Variables
var correctAnswer = 0;
var wrongAnser = 0;
var noAnswer = 0;
var timer = 60;
var intervalId;


//Start Button
$("#start").on("click", function(){
    startClock();
});

//Timer function
function startClock() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $("#count-down").html("Time Remaining: " + timer); 
}

