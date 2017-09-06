var mrGreen = {
  name: "Jacob Green",
  colour: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
};

var drOrchid = {
  name: "Doctor Orchid",
  colour: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist",
};

var profPlum = {
  name: "Victor Plum",
  colour: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer",
};

var missScarlet = {
  name: "Kasandra Scarlet",
  colour: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor",
};

var mrsPeacock = {
  name: "Eleanor Peacock",
  colour: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité",
};

var mrMustard = {
  name: "Jack Mustard",
  colour: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player",
};


var rope = {
  name: "Rope",
  weight: 10,
};

var knife = {
  name: "Knife",
  weight: 8,
};

var candlestick = {
  name: "Candlestick",
  weight: 2,
};

var dumbell = {
  name: "Dumbell",
  weight: 30,
};

var poison = {
  name: "Poison",
  weight: 2,
};

var axe = {
  name: "Axe",
  weight: 15,
};

var bat = {
  name: "Bat",
  weight: 13,
};

var trophy = {
  name: "Trophy",
  weight: 25,
};

var pistol = {
  name: "Pistol",
  weight: 20,
};


var rooms = [{name: "Dining Room",},
             {name: "Conservatory",},
             {name: "Kitchen",},
             {name: "Study",},
             {name: "Library",},
             {name: "Billiard Room",},
             {name: "Lounge",},
             {name: "Ballroom",},
             {name: "Hall",},
             {name: "Spa",},
             {name: "Living Room",},
             {name: "Observatory",},
             {name: "Theatre",},
             {name: "Guesthouse",},
             {name: "Patio"},
             ];

var suspects = [];
suspects.push(mrMustard, mrsPeacock, missScarlet, profPlum, drOrchid, mrGreen);

var weapons =[];
weapons.push(pistol,trophy,bat,axe,poison,dumbell,candlestick,knife,rope);

function random_selector(array) {
    var randomNumber = Math.floor(Math.random()*array.length);
    return array[randomNumber].name;

}

function pick_mistery() {
    return caseFile = {suspect: random_selector(suspects), weapon: random_selector(weapons), room: random_selector(rooms)};
}

function reveal_mistery(mistery) {
    console.log("Mr Boddy was killed by " + caseFile.suspect + " in the " + caseFile.room + " with the " + caseFile.weapon + ".");
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
