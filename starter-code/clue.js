
var MrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

var DrOrchid = {
  firstName: "Doctor",
  lastName:  "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};

  var ProfPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

  var MissScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

 var MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

 var MrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};


var Rope = {
   name: "rope",
   weight: 10
};

var Knife = {
   name: "knife",
   weight: 8
};

var Candlestick = {
  name: "candlestick",
  weight: 2
};

var Dumbbell = {
  name: "dumbbell",
  weight: 30
};

var Poison = {
  name: "poision",
  weight: 2
};

var Axe = {
  name: "axe",
  weight: 15
};

var Bat = {
  name: "bat",
  weight: 13
};

var Trophy = {
  name: "trophy",
  weight: 25
};

var Pistol = {
  name: "pistol",
  weight: 20
};



var characters = [MrGreen, DrOrchid, ProfPlum, MissScarlet, MrsPeacock, MrMustard];

var weapons = [Rope, Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy, Pistol];

var rooms = ["Dinning Room",
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

var mystery = {
  killer: "",
  weapon: "",
  room: ""
};
function random_selector(array) {
  return array[Math.floor(Math.random()*array.length)];
}

var mystery = {
  killer: "",
  weapon: "",
  room: ""
};

function pick_mystery() {
    mystery.killer = random_selector(characters);
    mystery.weapon = random_selector(weapons);
    mystery.room = random_selector(rooms);
    return mystery;
}

function reveal_mystery(mystery) {
  console.log("The murder was committed by " + mystery.killer.firstName + " " + mystery.killer.lastName +  ", in the " + mystery.room + " with a " + mystery.weapon.name + ".");
}

var mystery = pick_mystery();
reveal_mystery(mystery);
