
//---- Characters ----
var characters = [
  //Mr Green
  {firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
},
  //Dr Orchid
  {firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
},
  //Prof Plum
  {firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
},
  //Miss Scarlet
  {firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
},
 //Mrs Peacock
  {firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: "36",
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
},
 //Mr Mustard
  {firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
}
];
//---- Weapons ----
var weapons = [
{type: "rope", weight: 10},
{type: "knife", weight: 8},
{type: "candlestick", weight: 2},
{type: "dumbbell", weight: 30},
{type: "poison", weight: 2},
{type: "axe", weight: 15},
{type: "bat", weight: 13},
{type: "trophy", weight: 25},
{type: "pistol", weight: 20},
];
//---- Rooms ----
var rooms = [
"Dinning Room",
"Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard Room",
"Lounge",
"Ballroom",
"Hall",
"Spa",
"Living Room",
"Observatory",
"Theater",
"Guest House",
"Patio",
];
var playerCards = [];
random_selector(playerCards);
//console.log(playerCards[0]);
function random_selector(array) {
  array[0] = randomPosition(characters);
  array[1] = randomPosition(weapons);
  array[2] = randomPosition(rooms);
}
//generates random position in called array
function randomPosition(array){
  var min = 0;
  var max = array.length-1;
  var randomNumber = Math.floor(Math.random()*(max - min)+min);
  return array[randomNumber];
}
function pick_mistery() {
  var array = [
    randomPosition(characters),
    randomPosition(weapons),
    randomPosition(rooms)
  ];
  return array;
}
function reveal_mistery(mistery) {
  console.log("It was " + mistery[0].firstName + " " + mistery[0].lastName + " with the " + mistery[1].type + " in the " + mistery[2] + "!");
  return;
}
var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
//console.log(mistery_envelope);
