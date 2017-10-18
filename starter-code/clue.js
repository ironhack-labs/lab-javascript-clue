
var characters = [{
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"},

{  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"},

  {firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"},

{  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"},

  {firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"},

{  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"}
];

//---- Weapons ----
var weapons = [
{name:"Rope", Weight: 10},
{name:"Knife", Weight: 8},
{name:"Candlestick", Weight: 2},
{name:"Dumbbell", Weight: 30},
{name:"Poison", Weight: 2},
{name:"Axe", Weight: 15},
{name:"Bat", Weight: 13},
{name:"Trophy", Weight: 25},
{name:"Pistol", Weight: 20}
];


//---- Rooms ----
var rooms = [
{place: "Dinning Room"},
{place: "Conservatory"},
{place: "Kitchen"},
{place: "Study"},
{place: "Library"},
{place: "Billiard Room"},
{place: "Lounge"},
{place: "Ballroom"},
{place: "Hall"},
{place: "Spa"},
{place: "Living Room"},
{place: "Observatory"},
{place: "Theater"},
{place: "Guest House"},
{place: "Patio"}
];


function random_selector(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pick_mistery() {
  var cards = [random_selector(characters),random_selector(weapons),random_selector(rooms)];
  return cards;
}

function reveal_mistery(mistery) {
  console.log(" Was "+ mistery[0].firstName +" With " + mistery[1].name + " At the " + mistery[2].place);
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
