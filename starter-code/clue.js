var mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

var drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};

var profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

var missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past,",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

var mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

var mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

var characters = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard,
];


var rope = {
  name: "Rope",
  Weight: 10
};

var knife = {
  name: "Knife",
  weight: 8
};

var candlestick = {
  name: "Candlestick",
  weight: 2
};

var dumbbell = {
  name: "Dumbbell",
  weight: 30
};

var poison = {
  name: "Poison",
  weight: 2
};

var axe = {
  name: "Axe",
  weight: 15
};

var bat = {
  name: "Bat",
  weight: 13
};

var trophy = {
  name: "Trophy",
  weight: 25
};

var pistol = {
  name: "Pistol",
  weight: 20
};

var weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
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
  "Patio",
  ];
  

function reveal_mistery(mistery)
{
  var a = Math.floor(Math.random() * rooms.length) ;
  var b = Math.floor(Math.random() * weapons.length) ;
  var c = Math.floor(Math.random() * characters.length) ;
  var mistery_envelope = {
    room: (rooms[a]),
    weapon: (weapons[b].name),
    character: (characters[c].first_name + " " + characters[c].last_name)
    };
    return mistery_envelope;
}

function random_selector(array) {
  var a = Math.floor(Math.random() * array.length) ;
  console.log(array[a]);
}