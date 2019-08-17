'use strict';

var correct = 0;
// Ask users name

var usersName = prompt('Hello! What\'s your name?');
console.log('User\'s name is ' + usersName);
alert('Can you guess the correct answers about me?');


// Question 1-5

function yesNoQuestion() {

  var questions = ['1. Do I like the weather in Seattle?', '2. Am I 30 years old?', '3. Have I ever been to Thailand?', '4. Have I lived somewhere else in the USA besides WA?', '5. Do I like Mediterranean cuisine?'];
  var yesNo = ['yes', 'y', 'no', 'n'];

  for (var i = 0; i < 5; i++) {
    var askQuestion = prompt(questions[i]);
    askQuestion = askQuestion.toLowerCase();
    if (i === 0) {
      if (askQuestion === yesNo[2] || askQuestion === yesNo[3]) {
        alert('Correct!');
        console.log('answer ' + askQuestion);
        correct++;
        //break;
      } else {
        alert('Nope!');
      }
    } else {
      if (askQuestion === yesNo[0] || askQuestion === yesNo[1]) {
        alert('Correct!');
        console.log('answer ' + askQuestion);
        correct++;
        //break;
      } else {
        alert('Nope!');
        console.log('answer ' + askQuestion);
      }
    }
  }
}

yesNoQuestion();



// Sixth question

function questionSix() {
  for (var k = 0; k < 4; k++) {
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
}

questionSix();



// Seventh question
function questionSeven() {
  var j = 0;
  var guessSport = prompt('7.What is one of my favourite kind of sport?');
  guessSport = guessSport.toLowerCase();
  var myFavouriteSport = ['soccer', 'tennis', 'volleyball'];
  var count = 1;
  var q7Guesses = 6;
  var inArray = false;
  while (count <= q7Guesses) {
    var guessesLeft = q7Guesses - count;
    count++;

    for (j = 0; j < myFavouriteSport.length; j++) {
      if (guessSport === myFavouriteSport[j]) {
        console.log('sport ' + myFavouriteSport[j]);
        inArray = true;
        console.log('inside for loop');
      }
    }
    if (inArray) {
      correct++;
      alert('Yep!');
      console.log('inside if statement');
      break;
    } else {
      guessSport = prompt('Sorry, not one of my favorite sports! Try again. You have ' + guessesLeft + ' guesses left!');
      console.log('guess sport ' + guessSport);
    }
  }
}

questionSeven();

alert('You got ' + correct + ' correct answers.');
console.log('correct answers ' + correct);

