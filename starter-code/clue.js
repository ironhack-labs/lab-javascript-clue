var characters = [
  { firstname: "Jacob",
    lastname:  "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  },
  { firstname: "Doctor",
    lastname: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr.'Boddy'",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  },
  { firstname: "Victor",
    lastname: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  },
  { firstname: "Kasandra",
    lastname: "Scarlet",
    color: "red", 
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
  },
  { firstname: "Eleanor",
    lastname: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité",
  },
  { firstname: "Jack",
    lastname: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
  }
];


var Rope = { 
  name: "rope",
  Weight: 10
};

var Knife = { 
  name: "knife",
  Weight: 8
};

var Candlestick = {
  name: "candlestick",
  Weight: 2
};

var Dumbbell = {
  name: "dumbell",
  Weight: 30
};

var Poison = {
  name: "poison",
  Weight: 2
};

var Axe = {
  name: "axe",
  Weight: 15
};

var Bat = {
  name: "bat",
  Weight: 13
};

var Trophy = {
  name: "trophy",
  Weight: 25
};

var Pistol = {
  name: "pistol",
  Weight: 20
};

var weapon = [Rope, Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy, Pistol];

var Rooms = [
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



function random_selector(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createMystery() {
  var caseFileConfidential = [random_selector(characters), random_selector(weapon), random_selector(Rooms)];
  console.log("Mr. Boddy was murdered!");
  return caseFileConfidential;
}

function revealMistery(mistery) {
  console.log("Mr.Boddy was murederd by ", mistery[0].firstname + " " + mistery[0].lastname, " with ", mistery[1].name, " in the ", mistery[2]);
}


var misteryEnvelope = createMystery();
revealMistery(misteryEnvelope);