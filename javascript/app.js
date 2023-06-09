'use strict';

let username = prompt('What is your name?');
// console.log('username');

let hometown = prompt('What is your hometown?');
// console.log('hometown');

let food = prompt('Is your favorite food pizza?');
switch (food.toLowerCase()){
case 'yes':
  // console.log('food');
  alert ('great choice');
  break;
case 'no':
  // console.log('food');
  alert ('that sucks');

}

let travel = prompt('Do you like to travel?');
switch (travel.toLowerCase()){
case 'yes':
  // console.log('travel');
  alert ('traveling is great');
  break;
case 'no':
  // console.log('travel');
  alert ('you are missing out');
}

let sports = prompt('Do you like watching sports?');
switch (sports.toLowerCase()){
case 'yes':
  // console.log('sports');
  alert ('sports are exciting');
  break;
case 'no':
  // console.log('sports');
  alert ('you are missing out');
}

let kids = prompt('Do you have any kids');
switch (kids.toLowerCase()){
case 'yes':
  // console.log('kids');
  alert ('kids are a blessing');
  break;
case 'no':
  // console.log('kids');
  alert ('you have it made lol');
}

let read = prompt ('Do you like to read');
switch (read.toLowerCase()){
case 'yes':
  // console.log('read');
  alert ('reading helps you grow');
  break;
case 'no':
  // console.log('read');
  alert ('you cant grow if you dont read');

}


for(let i = 0; i < 4; i++){
  let number = prompt('Guess a number between 1 and 10');
  if (number === '5'){
    alert('correct');
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

let answer = prompt('What are John\'s favorite places to eat in Chicago?');

let johnFavFood = ['Giordanos', 'Harolds', 'Majanis', 'Babas'];

for (let i = 0; i < 6; i++) {
  console.log(johnFavFood[i]);
  if (johnFavFood === ['Giordanos','Harolds','Majanis', 'Babas']){
    alert('correct');
  }
  if(johnFavFood !== ['Giordanos', 'Harolds','Majanis', 'Babas']){
    alert('wrong answer');
  }

}

let greeting = document.querySelector ('.greeting');
greeting.textContent= `Hi ${username} welcome to my page`;

let message = document.querySelector ('.message');
message.textContent= `Goodbye ${username} thanks for visiting my page`;



