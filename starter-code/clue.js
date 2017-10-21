

//---- Characters ----

  var mrGreen = {
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

  var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};

  var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

  var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

 var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};
 var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

var rope = {
  weapon:"rope",
  weight: 10
};
var knife = {
  weapon:"knife",
  weight: 8
};
var candlestick = {
  weapon:"candlestick",
  weight: 2
};
var dumbbell = {
  weapon:"dumbbell",
  weight: 30
};
var poison = {
  weapon:"poison",
  weight: 2
};
var axe = {
  weapon:"axe",
  weight: 15
};
var bat = {
  weapon:"bat",
  weight: 13
};
var trophy = {
  weapon:"trophy",
  weight: 25
};
var pistol = {
  weapon:"pistol",
  weight: 20
};


//---- Rooms ----
var stackCardRoom = [
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

var stackCardSuspect = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
var stackCardWeapon = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];



function random_selector(array) {
  return array[Math.floor(Math.random()*(array.length))];
}



function pick_mistery(envelop) {
  var weapon = random_selector(stackCardWeapon);
  var suspect = random_selector(stackCardSuspect);
  var room = random_selector(stackCardRoom);

  envelop = [weapon,suspect,room];
  return envelop;
}


function reveal_mistery(mistery) {
  var envelop = pick_mistery(mistery);
  console.log("The murderer is " + envelop[1].firstName+" "+envelop[1].lastName+ "!!! He used " + envelop[0].weapon + " in the "+envelop[2]+".");
}


var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
