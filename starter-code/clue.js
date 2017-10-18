// Declaraciones de personajes.
var mrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
}

var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
}

var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
}

var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
}

var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
}

var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
}

var suspect = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Declaración de armas.
var weapons = [
  {name: "Rope", weight: 10},
  {name: "Knife", weight: 8},
  {name: "Candlestick", weight: 2},
  {name: "Dumbbell", weight: 30},
  {name: "Poison", weight: 2},
  {name: "Axe", weight: 15},
  {name: "Bat", weight: 13},
  {name: "Trophy", weight: 25},
  {name: "Pistol", weight: 20}
]

// Declaración de habitaciones.
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
"Patio"
];

var fnArray = [suspect, weapons, rooms];

// ITERACIÓN 2.
/* Crear método para seleccionar un elemento de cada stack.
E introducirlo en un array vacío que representará al asesino.*/
var shuffle = [];

function random_selector(array) {
  array.map(function(e) {
    var value = Math.round(Math.random() * (e.length - 1));
    shuffle.push(e[value]);
  });
  return shuffle;
}


function pick_mistery() {
  // Esta función está comprimida en random_selector().
}

// Crear variable con Case File Confidential y método que revele al asesino.
function reveal_mistery(mistery) {
  var killer = "El asesino es " + mistery[0].firstName + " " + mistery[0].lastName;
  var room = " y mató a la víctima en la habitación " + mistery[2];
  var weap = " con el arma " + mistery[1].name + ".";
  console.log(killer + room + weap);
}

var mistery_envelope = random_selector(fnArray);

reveal_mistery(mistery_envelope);
