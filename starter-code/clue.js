//---- Characters ----
var characters = [

  {
  nickName: "MrGreen",
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  looks: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
},

  {
  nickName: "DrOrchid",
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  looks: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
},

  {
  nickName: "ProfPlum",
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  looks: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
},

  {
  nickName: "MissScarlet",
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  looks: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
},

  {
  nickName: "MrsPeacock",
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  looks: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
},

  {
  nickName: "MrMustard",
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  looks: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
},
];

//---- Weapons ----

var weapons = [
{name: "rope", weight: 10},
{name: "knife", weight: 8},
{name: "candlestick", weight: 2},
{name: "dumbbell", weight: 30},
{name: "poison", weight: 2},
{name: "axe", weight: 15},
{name: "bat", weight: 13},
{name: "trophy", weight: 25},
{name: "pistol", weight: 20}
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


function random_selector(cardPick) {
  return cardPick[Math.floor(Math.random()*cardPick.length)];
}


function pick_mistery() {
  var mistery = [random_selector(characters),random_selector(weapons),random_selector(rooms)];
  return mistery;
}

function reveal_mistery(mistery) {
console.log(
"The Killer is "+mistery[0].nickName+
". His/her full name is "+mistery[0].firstName +" "+ mistery[0].lastName+
". The persons color is "+mistery[0].color+". "+ mistery[0].looks+
". The killer is "+mistery[0].age+" years old and is a "+ mistery[0].occupation+
". Mr Boddy got killed in the "+ mistery[2]+" with a "+ mistery[1].name+", weight: "+mistery[1].weight+
". Finally the mistery is solved!");
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
