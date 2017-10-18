var characters =[

  {
first_name:"Jacob",
last_name:"Green",
color: "green",
description: "He has a lot of connections",
age: 45,
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation: "Entrepreneur",
  },
 {
first_name: "Doctor",
last_name: "Orchid",
color: "white",
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age: 26,
image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation: "Scientist",
 },
{
first_name: "Victor",
last_name: "Plum",
color: "purple",
description: "Billionare video game designer",
age: 22,
image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation: "Designer",
},
{
first_name: "Kasandra",
last_name: "Scarlet",
color: "red",
description: "She is an A-list movie star with a dark past",
age: 31,
image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation: "Actor",
},
{
first_name: "Eleanor",
last_name: "Peacock",
color: "blue",
description: "She is from a wealthy family and uses her status and money to earn popularity",
age: 36,
image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation: "Socialité",
},
{
first_name: "Jack",
last_name: "Mustard",
color: "yellow",
description: "He is a former football player who tries to get by on his former glory",
age: 62,
image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation: "Retired Football player",
}
];


var weapons = [
{ weapon: "Rope",Weight: 10},
{weapon: "Knife",  Weight: 8},
{weapon: "Candlestick", Weight: 2},
{weapon: "Dumbbell", Weight: 30},
{weapon: "Poison", Weight: 2},
{weapon: "Axe", Weight: 15},
{weapon: "Bat", Weight: 13},
{weapon: "Trophy", Weight: 25},
{weapon: "Pistol", Weight: 20}

];


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

function random (min,max) {
  var aleatorio = Math.random() * (max-min)+min;
   return Math.floor(aleatorio);
}

function random_selector(array) {
    return random(0,array.length-1);
}

function pick_mistery() {
  var charIndex = random_selector(characters);
  var weaponIndex = random_selector(weapons);
  var roomIndex = random_selector(rooms);
  var caseFile = [];

  caseFile.push(characters[charIndex]);
  caseFile.push(rooms[roomIndex]);
  caseFile.push(weapons[weaponIndex]);
}

function reveal_mistery(mistery) {
  var charIndex = random_selector(characters);
  var weaponIndex = random_selector(weapons);
  var roomIndex = random_selector(rooms);
  var caseFile = [];

  caseFile.push(characters[charIndex]);
  caseFile.push(rooms[roomIndex]);
  caseFile.push(weapons[weaponIndex]);

  console.log ("El asesino es: " + caseFile[0].first_name + " " + caseFile[0].last_name);
  console.log ("Ha ocurrido en la habitación: " + caseFile[1]);
  console.log ("Ha sido con el arma: " + caseFile[2].weapon);
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
