var MrGreen = {
  firstName: "Jacob",
  lastName: " Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
};

var DrOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist",
};

var ProfPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer",
};

var MissScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor",
};

var MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité",
};

var MrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",
};

var characters = [ MrGreen, DrOrchid, ProfPlum, MissScarlet, MrsPeacock, MrMustard];


var Rope = {
  name: "Rope",
  weight: 10
};

var Knife = {
  name: "Knife",
  weight: 8
};

var Candlestick = {
  name: "Candlestick",
  weight: 2
};

var Dumbbell = {
  name: "Dumbbell",
  weight: 30
};

var Poison = {
  name: "Poison",
  weight: 2
};

var Axe = {
  name: "Axe",
  weight: 15
};

var Bat = {
  name: "Bat",
  weight: 13
};

var Trophy = {
  name: "Trophy",
  weight: 25
};

var Pistol = {
  name: "Pistol",
  weight: 20
};


var weapons = [Rope, Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy, Pistol];


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

function random_selector(array) {
  return array[Math.floor(Math.random()*array.length)];
}

function pick_mistery(characters, rooms, weapons) {

  return [random_selector(characters).firstName, random_selector(rooms) , random_selector(weapons).name];


}

var mistery_envelope = pick_mistery(characters, rooms, weapons);

function reveal_mistery(envelope) {
   console.log("The killer was "  +" "+ envelope[0] + " with a " + envelope[2] + " in the " + envelope[1])
}


reveal_mistery(mistery_envelope);
