var mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

var DrOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
}

var ProfPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
}
var MissScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
}

var MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
}


var MrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
}


var Rope = {
  Weight: 10
}

var Knife = {
  Weight: 8
}

var Candlestick = {
  Weight: 2
}

var Dumbbell = {
  Weight: 30
}

var Poison = {
  Weight: 2
}

var Axe = {
  Weight: 15
}

var Bat = {
  Weight: 13
}

var Trophy = {
  Weight: 25
}

var Pistol = {
  Weight: 20
}

var cardSuspects = ["MrGreen", "DrOrchid", "ProfPlum", "MissScarlet", "MrsPeacock", "MrMustard"]

var cardWeapons = ["rope", "Knife", "Candlestick", "Dumbbell", "Poison", "Axe", "Bat", "Trophy", "Pistol"]

var cardRooms = ["dinningRoom", "conservatorty", "kitchen", "study", "library", "billiardRoom", "lounge", "ballroom", "hall", "spa", "livingRoom", "observatory", "theater", "guestHouse", "patio"]

////Iteration 2.1 y 2.2

function random_selector() {

  var random_cardSuspects = cardSuspects[Math.floor(Math.random() * cardSuspects.length)];
  console.log(random_cardSuspects);

  var random_cardWeapons = cardWeapons[Math.floor(Math.random() * cardWeapons.length)];
  console.log(random_cardWeapons);

  var random_cardRooms = cardRooms[Math.floor(Math.random() * cardRooms.length)];
  console.log(random_cardRooms);
}
random_selector();
