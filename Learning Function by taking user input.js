var readlineSync = require("readline-sync");

var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer === answer) {
    console.log("You are right!");
    
    score = score + 1;
    
  } else
  { 
    console.log("You are wrong!");
    score = score - 1;
}
}
play("Where do I Live? ", "Rishikesh");
console.log ("Score is: " + score)