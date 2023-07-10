var readlineSync = require('readline-sync');

var userAnswerAge = readlineSync.question("Am I older than 25? ");

console.log("You entered " + userAnswerAge);

if (userAnswerAge === "yes") {

console.log("You are right!")
} else { 

console.log("You are wrong!")
}