'use strict';
let score = 0;
let username = prompt('What is your name?');

let hometown = prompt('What is your hometown?');

function guessingGame(){
  let food = prompt('Is your favorite food pizza?');
  switch (food.toLowerCase()){
  case 'yes':
    alert ('great choice');
    score++;
    break;
  case 'no':
    alert ('that sucks');
    break;
  default:
    alert('Please answer yes or no');
  }

  let travel = prompt('Do you like to travel?');
  switch (travel.toLowerCase()){
  case 'yes':
    alert ('traveling is great');
    score++;
    break;
  case 'no':
    alert ('you are missing out');
    break;
  default:
    alert('Do you not like to travel?');
  }

  let sports = prompt('Do you like watching sports?');
  switch (sports.toLowerCase()){
  case 'yes':
    alert ('sports are exciting');
    score++;
    break;
  case 'no':
    alert ('you are missing out');
    break;
  default:
    alert('Please answer question with yes or no');
  }

  let kids = prompt('Do you have any kids');
  switch (kids.toLowerCase()){
  case 'yes':
    alert ('kids are a blessing');
    score++;
    break;
  case 'no':
    alert ('you have it made lol');
    break;
  default:
    alert('I really need you to answer the question with yes or no');
  }

  let read = prompt ('Do you like to read');
  switch (read.toLowerCase()){
  case 'yes':
    alert ('reading helps you grow');
    score++;
    break;
  case 'no':
    alert ('you cant grow if you dont read');
    break;
  default:
    alert('you didnt answer my question');

  }
}


for(let i = 0; i < 4; i++){
  let number = prompt('Guess a number between 1 and 10');
  if (number === '5'){
    alert('correct');
    score++;
    break;
  }
  console.log(i);
  if(number < 5){
    alert('too low');
  }
  else if (number > 5){
    alert('too high');
  }
  if(i === 3){
    alert('out of guesses');
  }
}

let johnFavFood = ['Giordanos', 'Harolds', 'Majanis', 'Babas'];
let answersLeft = 0;
for(let i = 0; i < 6; i++){
  let answer = prompt(`What are my favorite Chicago restaurants? There are ${johnFavFood.length - answersLeft} correct answers left. You have ${6 - i} chances left`).toLowerCase();
  if (johnFavFood.includes(answer)){
    alert(`${answer} is correct`);
    answersLeft++;
    score++;
  }
}
alert('The correct answers are Giordanos, Harolds, Majanis, Babas');
alert('you scored ' + score);


let quizButton = document.getElementById('quizBtn');
quizButton.addEventListener('click', guessingGame);
let greeting = document.querySelector ('.greeting');
greeting.textContent= `Hi ${username} welcome to my page`;

let message = document.querySelector ('.message');
message.textContent= `Goodbye ${username} thanks for visiting my page`;



