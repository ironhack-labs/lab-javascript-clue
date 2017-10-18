var characteres = [
  mrGreen = {
  first_name: "Jacob",
  last_name:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur",
  },

  drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
  },

  profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
  },

  missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
  },

  mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
 },

  mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
 }]


var weapons = [
  
  weap1 = {
    name: "rope",
    weight: 10
  },

  weap2 = {
    name: "knife",
    weight: 8
  },

  weap3 = {
    name: "candlestick",
    weight: 2
  },

  weap4 = {
    name: "dumbbell",
    weight: 30
  },

  weap5 = {
    name: "poison",
    weight: 2
  },

  weap6 = {
    name: "axe",
    weight: 15
  },

  weap7 = {
    name: "bat",
    weight: 13
  },

  weap8 = {
    name: "trophy",
    weight: 25
  },

  weap9 = {
    name: "pistol",
    weight: 20
  }
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

function random_selector(array) {
  return Math.floor(Math.random() * array.length);
}

function pick_mistery(charaArray,weapsArray,roomsArray) {
  var character = characteres[random_selector(charaArray)];
  var weapon = weapons[random_selector(weapsArray)];
  var room = rooms[random_selector(roomsArray)];

  return [character,weapon,room];
}

function reveal_mistery(mistery) {
  console.log("The character was", mistery[0].first_name, mistery[0].last_name);
  console.log("The weapon was", mistery[1].name, "which has a weight of", mistery[1].weight);
  console.log("The character was", mistery[2]);
}

var mistery_envelope = pick_mistery(characteres,weapons,rooms);
reveal_mistery(mistery_envelope);
