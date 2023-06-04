'use script';

let username = prompt('What is your name?');
// console.log(`The user's name is ${username} hello there ${username}`);

let hometown = prompt('What is your hometown?');
// console.log('The user is from ${hometown}');

let food = prompt('Is your favorite food pizza?');
switch (food.toLowerCase()){
case 'yes':
  // console.log('great choice');
  alert ('great choice');
  break;
case 'no':
  // console.log('that sucks');
  alert ('that sucks');

}

let travel = prompt('Do you like to travel?');
switch (travel.toLowerCase()){
case 'yes':
  // console.log('traveling is great');
  alert ('traveling is great');
  break;
case 'no':
  // console.log('you are missing out');
  alert ('you are missing out');
}

let sports = prompt('Do you like watching sports?');
switch (sports.toLowerCase()){
case 'yes':
  // console.log('sports are exciting');
  alert ('sports are exciting');
  break;
case 'no':
  // console.log('you are missing out');
  alert ('you are missing out');
}

let kids = prompt('Do you have any kids');
switch (kids.toLowerCase()){
case 'yes':
  // console.log('kids are a blessing');
  alert ('kids are a blessing');
  break;
case 'no':
  // console.log('you have it made lol');
  alert ('you have it made lol');
}

let read = prompt ('Do you like to read');
switch (read.toLowerCase()){
case 'yes':
  // console.log('reading is good for you');
  alert ('reading helps you grow');
  break;
case 'no':
  // console.log('you cant grow if you dont read');
  alert ('you cant grow if you dont read');

}

let greeting = document.querySelector ('.greeting');
greeting.textContent= `Hi ${username} welcome to my page`;

let message = document.querySelector ('.message');
message.textContent= `Goodbye ${username} thanks for visiting my page`;



