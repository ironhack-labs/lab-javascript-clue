//Create data structure for suspects

var mrGreen = {
  color: "Green",
  firstName: "Jacob",
  lastName: "Green",
  occupation: "Socialite",
  age: 55,
  gender: "Male"
};

var drOrchid = {
  color: "White",
  firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Doctor",
  age: 43,
  gender: "Female"
};

var mrPlum = {
  color: "Purple",
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Billionaire",
  age: 56,
  gender: "Male"
};

var msScarlet = {
  color: "Red",
  firstName: "Kasandra",
  lastName: "Scarlet",
  occupation: "Movie Star",
  age: 33,
  gender: "Female"
};

var msPeacock = {
  color: "Blue",
  firstName: "Eleanor",
  lastName: "Peacock",
  occupation: "Heir",
  age: 25,
  gender: "Female"
};

var mrMustard = {
  color: "Yellow",
  firstName: "Jack",
  lastName: "Mustard",
  occupation: "Retired footballer",
  age: 44,
  gender: "Male"
};

var characters = [mrGreen, drOrchid, mrPlum, msScarlet, msPeacock, mrMustard];

//Create data structure for weapons

var rope = {
  name: "rope",
  color: "Yellow",
  pain: 3,
  article: ""
};

var knife = {
  name: "knife",
  color: "Steel",
  pain: 7,
  article: "a "
};

var candlestick = {
  name: "candlestick",
  color: "Silver",
  pain: 4,
  article: "a "
}

var dumbell = {
  name: "dumbbell",
  color: "Black",
  pain: 6,
  article: "a "
};

var poison = {
  name: "poison",
  color: "Purple",
  pain: 8,
  article: ""
};

var axe = {
  name: "axe",
  color: "Brown",
  pain: 7,
  article: "an "
};

var trophy = {
  name: "trophy",
  color: "Gold",
  pain: 4,
  article: "a "
};

var pistol = {
  name: "pistol",
  color: "Black",
  pain: 10,
  article: "a "
};

var weapons = [rope, knife, candlestick, dumbell, poison, axe, trophy, pistol];

//Create data structure for suspects

var diningRoom = {
  name: "dining room",
  size: "Large"
};

var conservatory = {
  name: "conservatory",
  size: "Large"
};

var kitchen = {
  name: "kitchen",
  size: "Medium"
};

var study = {
  name: "study",
  size: "Small"
};

var library = {
  name: "libary",
  size: "Large"
};

var billiardRoom = {
  name: "billiard room",
  size: "Medium"
};

var lounge = {
  name: "lounge",
  size: "Smalle"
};

var ballroom = {
  name: "ballroom",
  size: "Large"
};

var hall = {
  name: "hall",
  size: "Medium"
};

var spa = {
  name: "spa",
  size: "Small"
};

var livingRoom = {
  name: "living room",
  size: "Large"
};

var observatory = {
  name: "observatory",
  size: "Large"
};

var theater = {
  name: "theater",
  size: "Large"
};

var guestHouse = {
  name: "guest house",
  size: "Large"
};

var patio = {
  name: "patio",
  size: "medium"
};

var rooms = [diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio];

//Putting it all together
var cluedo = {
  characters: characters,
  weapons: weapons,
  rooms: rooms
};

//Drawing a random card without replacement
function drawRandomCard(array) {
  return array[Math.floor( Math.random() * array.length)];
}

//Draw set of cards
function drawSetOfCards(game) {
  return {
    character: drawRandomCard(game.characters),
    weapon: drawRandomCard(game.weapons),
    room: drawRandomCard(game.rooms)
  };
}

//Reveal mystery
function revealMystery(file) {
  console.log(file.character.firstName + " " + file.character.lastName + " did it in the " + file.room.name + " with " + file.weapon.article + file.weapon.name + "!");
}

//-------------------------------------//
//DRAW CARDS AND REVEAL MYSTERY

var caseFileConfidental = drawSetOfCards(cluedo);
revealMystery(caseFileConfidental);

//-------------------------------------//
