// Characters

var mrGreen = {
  firstName:   "Jacob",
  lastName:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
};

var drOrchid = {
  firstName:   "Doctor",
  lastName:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
};

var profPlum = {
  firstName:   "Victor",
  lastName:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
};

var missScarlet = {
  firstName:   "Kasandra",
  lastName:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
};

var mrsPeacock = {
  firstName:   "Eleanor",
  lastName:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
};

var  mrMustard = {
  firstName:   "Jack",
  lastName:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
};


// Weapons

var rope = {
  name: "rope",   
  weight: 10
};

var knife = {
  name: "knife",  
  weight: 8
};

var candelstick = {
  name: "candlestick",
  weight: 2
};

var dumbbell = {
  name: "dumbbell",
  weight: 30
};

var poison = {
  name: "poison", 
  weight: 2
};

var axe = {
  name: "axe",
  weight: 15
};

var bat = {
  name: "bat",
  weight: 13
};

var trophy = {
  name: "trophy", 
  weight: 25
};

var pistol = {
  name: "pistol", 
  weight: 20
};



// Rooms

var dinningRoom = {
  name: "Dinning Room"
};

var conservatory = {
  name: "Conservatory"
};

var kitchen = {
  name: "Kitchen"
};

var study = {
  name: "Study"
};

var library = {
  name: "Library"
};

var billiardRoom = {
  name: "Billiard Room"
};

var lounge = {
  name: "Lounge"
};

var ballroom = {
  name: "Ballroom"
};

var hall = {
  name: "Hall"
};

var spa = {
  name: "Spa"
};

var livingRoom = {
  name: "Living Room"
};

var observatory = {
  name: "Observatory"
};

var theater = {
  name: "Theater"
};

var guestHouse = {
  name: "Guest House"
};

var patio = {
  name: "Patio"
};


// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

// Push characters
charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);

// Push rooms
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

//Push weapons
weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candelstick);
weaponsArray.push(dumbbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);


function randomSelector(array) {
  return array[Math.floor(Math.random() * array.length)]
}


function pickMistery() {
  var misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));
  return misteryEnvelope;
}

var misteryEnvelope = pickMistery();


function revealMistery(array) {
  return `${misteryEnvelope[0].firstName} ${misteryEnvelope[0].lastName} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`
}

revealMistery(misteryEnvelope);

