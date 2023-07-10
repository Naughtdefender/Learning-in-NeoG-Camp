var readlineSync = require('readline-sync');

var score = 0;

var userAnswerAge = readlineSync.question("Am I older than 25? ");

console.log("you entered " + userAnswerAge);

if (userAnswerAge === "yes") {

console.log("You are right!");
score = score + 1;
console.log("score is: " + score)
} else { 
console.log("You are wrong!");
score = score -1;
console.log("Score is: " + score)
}