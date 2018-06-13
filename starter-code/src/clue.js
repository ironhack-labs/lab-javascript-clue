// Characters
var mrGreen = {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
};

var Doctor = {
first_name:   "Doctor",
last_name:    "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
occupation:   "Scientist"
};

var Victor = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:           22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
};

var Kasandra = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:           31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
};

var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
};

var mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
};

var rope = {name: "rope",weight: "10"};
var knife = {name: "knife",weight: "8"};
var candlestick = {name: "candlestick",weight: "2"};
var dumbbell = {name: "dumbbell",weight: "30"};
var poison = {name: "poison",weight: "2"};
var axe = {name: "axe",weight: "15"};
var bat = {name: "bat",weight: "13"};
var trophy = {name: "trophy",weight: "25"};
var pistol = {  name: "pistol",weight: "20"};
var dinningRoom = {name: "Dinning Room"};
var conservatory = {name: "Conservatory"};
var kitchen = {name: "Kitchen"};
var study = {name: "Study"};
var library = {name: "Library"};
var billiardRoom = {name: "Billiard Room"};
var lounge = {name: "Lounge"};
var ballroom = {name: "Ballroom"};
var hall = {name: "Hall"};
var spa = {name: "Spa"};
var livingRoom = {name: "Living Room"};
var observatory = {name: "Observatory"};
var theater = {name: "Theater"};
var guestHouse = {name: "Guest House"};
var patio = {name: "Patio"};

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen);
charactersArray.push(Doctor);
charactersArray.push(Victor);
charactersArray.push(Kasandra);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);

// Rooms' Collection
var roomsArray = [];
roomsArray.push(dinningRoom);
roomsArray.push(conservatory);
roomsArray.push(kitchen);
roomsArray.push(study);
roomsArray.push(library);
roomsArray.push(billiardRoom);
roomsArray.push(lounge);
roomsArray.push(ballroom);
roomsArray.push(hall);
roomsArray.push(spa);
roomsArray.push(livingRoom);
roomsArray.push(observatory);
roomsArray.push(theater);
roomsArray.push(guestHouse);
roomsArray.push(patio);

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomSelector(myArr){
  return myArr[getRandomInt(myArr.length)];
}

var misteryEnvelope;

function pickMistery(){
  
  var mistery = [];
  
  mistery.push(randomSelector(charactersArray));
  mistery.push(randomSelector(weaponsArray));
  mistery.push(randomSelector(roomsArray));


  return mistery;
}

misteryEnvelope = pickMistery();

function revealMistery(myArr){

  return myArr[0].first_name + " " + myArr[0].last_name + " killed Mr.Boddy using the " + myArr[1].name + " in the " + myArr[2].name + "!!!!"; 

}

revealMistery(misteryEnvelope);