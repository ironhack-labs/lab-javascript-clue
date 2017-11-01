//----Functions----

function random_selector(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pick_mistery(suspects, weapons, rooms) {
  var mistery = [
      random_selector(suspects),
      random_selector(weapons),
      random_selector(rooms)
    ];
  return mistery;
}

function reveal_mistery(mistery) {
  console.log("POLICE REPORT:\n")
  console.log("The assassin was " + mistery[0].firstName + " " + mistery[0].lastName + ",");
  console.log("who used a "+ mistery[1].weight + " pounds " + mistery[1].item);
  console.log("to attack the victim (Mr. Boddy) at the " + mistery[2] +"\n");

  console.log("ASSASSIN´S FILE:\n");
  console.log("Name: " + mistery[0].firstName + " " + mistery[0].lastName);
  console.log("Color: " + mistery[0].color);
  console.log("Description: " + mistery[0].description);
  console.log("Age: " + mistery[0].age);
  console.log("Image: " + mistery[0].image);
  console.log("Occupation: " + mistery[0].occupation);
}

//---- Characters ----

var suspects = [
  MrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
},

  DrOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
},

  ProfPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
},

  MissScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
},

 MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
},

 MrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
}
];


//---- Weapons ----

var weapons = [
  Rope = {
    item: "rope",
    weight: 10
  },

  Knife = {
    item: "knife",
    weight: 8
  },

  Candlestick = {
    item: "candlestick",
    weight: 2
  },

  Dumbbell = {
    item: "dumbbell",
    weight: 30
  },

  Poison = {
    item: "poison",
    weight: 2
  },

  Axe = {
    item: "axe",
    weight: 15
  },

  Bat = {
    item: "bat",
    weight: 13
  },

  Trophy = {
    item: "trophy",
    weight: 25
  },

  Pistol = {
    item: "pistol",
    weight: 20
  }
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

var mistery_envelope = pick_mistery(suspects, weapons, rooms);
reveal_mistery(mistery_envelope);
