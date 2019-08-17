'use strict';

var correct = 0;
// Ask users name

var usersName = prompt('Hello! What\'s your name?');
console.log('User\'s name is ' + usersName);
alert('Can you guess the correct answers about me?');


// Question 1-5

var questions = ['1. Do I like the weather in Seattle?', '2. Am I 30 years old?', '3. Have I ever been to Thailand?', '4. Have I lived somewhere else in the USA besides WA?', '5. Do I like Mediterranean cuisine?'];
var yesNo = ['yes', 'y', 'no', 'n'];
for (var i = 0; i < 5; i++) {
  var askQuestion = prompt(questions[i]);
  askQuestion = askQuestion.toLowerCase();
  if (i === 0) {
    if (askQuestion === yesNo[2] || askQuestion === yesNo[3]){
      alert('Correct!');
      correct++;
    } else {
      alert('Nope!');
    }
  } else {
    if (askQuestion === yesNo[0] || askQuestion === yesNo[1]){
      alert('Correct!');
      correct++;
    } else {
      alert('Nope!');
    }
  }
}


// Sixth question

for (var i = 0; i < 4; i++) {
  var averageMiles = prompt('6. How many miles do I average walk every day? You\'ve got four chances to get it right!');
  if (averageMiles === '2') {
    alert('You are right!');
    console.log('The answer is ' + averageMiles);
    correct++;
    break;
  }
  else if (averageMiles < '2') {
    alert('Too low!');
    console.log(averageMiles + ' is too low');
  }
  else {
    alert('Too high!');
    console.log(averageMiles + ' is to high');
  }
}


// Seventh question

var guessSport = prompt ('7.What is one of my favourite kind of sport?');
guessSport = guessSport.toLowerCase();
var myFavouriteSport = ['soccer', 'tennis', 'volleyball'];
var count = 1;
var q7Guesses = 6;
var inArray = false;
while(count <= q7Guesses) {
  var guessesLeft = q7Guesses - count;
  count++;

  for(i = 0; i < myFavouriteSport.length; i++) {
    if(guessSport === myFavouriteSport[i]){
      inArray = true;
    }
  }
  if (inArray === true){
    correct++;
    alert('Yep!');
    break;
  }
  else if (inArray === false){
    guessSport = prompt('Sorry, not one of my favorite sports! Try again. You have ' + guessesLeft + ' guesses left!');
  }
}

alert('You got ' + correct + ' correct answers.');
console.log('correct answers ' + correct);

