'use strict';


// Ask users name

var usersName = prompt('Hello! What\'s your name?');
console.log('User\'s name is ' + usersName);
alert('Can you guess the correct answers about me?');

//First question
var likeWeather = prompt('Do I like weather in Seattle? Yes/No');
likeWeather = likeWeather.toLowerCase();
if(likeWeather === 'yes'  || likeWeather === 'y'){
  alert('You are not right! ');
  console.log('The answer is', likeWeather, typeof likeWeather);
} else if (likeWeather === 'no' || likeWeather === 'n') {
  alert('Yep, that is true, I do not like weather but I like the city and nature around!');
  console.log('The answer is', likeWeather, typeof likeWether);
}
else {
  alert('What do you mean?!');
}

//Second question

var howOld = prompt('2. Am I 30 year old? Yes/No');
howOld = howOld.toLowerCase();
if(howOld === 'yes'  || howOld === 'y') {
  alert ('Yes, that is correct! Good job!');
  console.log('The answer is', howOld, typeof howOld );
} else if (howOld === 'no' || howOld === 'n') {
  alert('Nope!');
  console.log('The answer is', howOld, typeof howOld);
}
else { 
  alert('What do you mean?!');
}

//Third question

var beenToThailand = prompt('3. Have I ever been to Thailand? Yes/No');
beenToThailand = beenToThailand.toLowerCase();

if(beenToThailand === 'yes'  || beenToThailand === 'y'){
  alert('Yes, that is correct! Good job!');
  console.log('The answer is', beenToThailand, typeof beenToThailand );
} else if (beenToThailand === 'no' || beenToThailand === 'n') {
  alert('Nope!');
  console.log('The answer is', beenToThailand, typeof beenToThailand); 
} else {
  alert('What do you mean?!');
}

//Fourth question

var livedSomewhere = prompt('4. Have I lived somewhere else in the USA? Yes/No');
livedSomewhere = livedSomewhere.toLowerCase();
if (livedSomewhere === 'yes'  || livedSomewhere === 'y') {
  alert('Yes, that is correct! I haved lived in Maryland for abot 4 months 7 years ago!');
  console.log('The answer is', livedSomewhere, typeof livedSomewhere );
} else if (livedSomewhere === 'no' || livedSomewhere === 'n') {
  alert ('Nope!');
  console.log('The answer is', livedSomewhere , typeof livedSomewhere);
} else  {
  alert('What do you mean?!');}

// Fifth question
var likeCuisine = prompt ('5. Do I like Mediterranean cuisine?');
likeCuisine = likeCuisine.toLowerCase();    
if(likeCuisine === 'yes' || likeCuisine === 'y'){
  alert('Yes, that is true! I like Italian, Spanish and Greek cuisine!');
  console.log('The answer is', likeCuisine, typeof likeCuisine);
} else if (likeCuisine === 'no' || likeCuisine === 'n'){
  alert('Nope!');
  console.log('The answer is', likeCuisine, typeof likeCuisine);
} else {
  alert('What do you mean?!'); }


