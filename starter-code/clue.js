// Characters

var mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "Green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepeneur"
}

var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "White",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
}

var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "Purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
}

var missScarlet = {
  firstName: "Kassandra",
  lastName: "Scarlet",
  color: "Red",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepeneur"
}

var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "Blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
}

var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "Yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football Player"
}

//character array

var characters = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

//weapons array

var weapons = [
  {name: "Rope", weight: 10},
  {name: "Knife", weight: 8},
  {name: "Candlestick", weight: 2},
  {name: "Dumbbell", weight: 30},
  {name: "Poison", weight: 2},
  {name: "Axe", weight: 15},
  {name: "Bat", weight: 13},
  {name: "Trophy", weight: 25},
  {name: "Pistol", weight: 20},
];

//rooms array
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

//Coge un numero aleatorio

function random_selector(stack) {
  var randomNumber = Math.floor(Math.random()*stack.length);

  return stack[randomNumber];
}

function pick_mistery() {
  var randomMistery = [random_selector(characters), random_selector(weapons), random_selector(rooms)];

  return randomMistery;
}

var mistery_envelope = pick_mistery();

function reveal_mistery (mistery_envelope) {
  return "The murderer is " + mistery_envelope[0].firstName + " " + mistery_envelope[0].lastName + " and he is " + mistery_envelope[0].age + " years old. He murdered the victim with a " + mistery_envelope[1].name + " in the " + mistery_envelope[2];
}

reveal_mistery (mistery_envelope);
