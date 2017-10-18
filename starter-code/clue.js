var mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: "45",
  occupation: "Entrepreneur"
};


var DrOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: "26",
  occupation: "Scientist"
};

var ProfPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: "22",
  occupation: "Designer"
};

var MissScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: "31",
  occupation: "Actor"
};

var MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: "36",
  occupation: "Socialité"
};

var MrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: "62",
  occupation: "Retired Football player"
};

//WEAPONS------

var rope = {
  name: "rope",
  weight: "10"
};

var knife = {
  name: "knife",
  weight: "8"
};

var candlestick = {
  name: "candlstick",
  weight: "2"
};

var dumbell = {
  name: "dumbell",
  weight: "30"
};

var poison = {
  name: "poison",
  weight: "2"
};

var axe = {
  name: "axe",
  weight: "15"
};

var bat = {
  name: "bat",
  weight: "13"
};

var trophy = {
  name: "trophy",
  weight: "25"
};

var pistol = {
  name: "pistol",
  weight: "20"
};

//ROOMS----

var rooms = [
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Biliard Room",
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

var cardName = [
  mrGreen,
  DrOrchid,
  ProfPlum,
  MissScarlet,
  MrsPeacock,
  MrMustard
];

var weapons = [
  rope,
  knife,
  candlestick,
  dumbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

function random_selector(array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}

function pick_mistery() {
  var killer = random_selector(cardName);
  var room = random_selector(rooms);
  var weapon = random_selector(weapons);

  var mystery = {
    name: killer,
    place: room,
    thing: weapon
  };
  return mystery;
}

function reveal_mistery(mystery) {
  console.log('The killer is ' + mystery.name.firstName + '. He/she killed Mr. Boddy. He was killed in ' + mystery.place + ' with a ' + mystery.thing.name + '!');
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
