
var suspectList = [mrGreen = {
  name: "Jacob Green",
  colour: "green",
  occupation: "unknown",
  age: undefined,
  description: "He has a lot of connections and is always willing to help people out -- for a price."
}, drOrchid = {name: "Doctor Orchid"}, victor = {name: "Victor Plum"},
kasandra = {name: "Kasandra Scarlet"}, eleanor = {name: "Eleanor Peacock"},
jack = {name: "Jack Mustard"}
];

var weaponList = [ rope = {
  name: "rope",
  material: "cotton",
  color: "dirty white",
  dimensions: "2 meters",
  hurtFactor: 1,
  weight: "light"
}, knife = {name: "knife"}, candlestick = {name: "candlestick"},
dumbbell = {name: "dumbbell"}, poison = {name: "poison"},
axe = {name: "axe"}, bat = {name: "bat"}, trophy = {name: "trophy"},
pistol = {name: "pistol"}
];


var roomsList = [ hall = {
  sqrMeters: 20,
  windows: true,
  locked: false
}, diningRoom = {name: "diningRoom"}, conservatory = {name: "conservatory"},
kitchen = {name: "kitchen"}, study = {name: "study"}, library = {name: "library"},
billiardRoom = {name: "billiardRoom"}, lounge = {name: "lounge"},
ballRoom = {name: "ballRoom"}, spa = {name: "spa"}, livingRoom = {name: "livingRoom"},
observatory = {name: "observatory"}, theatre = {name: "theatre"},
guestHouse = {name: "guestHouse"}, patio = {name: "patio"}
];


// Method to randomly select one element from a card stack (General)
function randomCard(cardList) {
  var min = 0;
  var max = cardList.length - 1;
  var randNum = Math.floor(Math.random() * (max - min));
  var card = cardList[randNum];
  return card;
};

// Function that calls the method above for each card stack

var allList = [suspectList, weaponList, roomsList];

function randomList(list) {
  var result = [];
  for (var i = 0; i < list.length; i+=1) {
    result.push(randomCard(list[i]));
  }

  return result;
};

// Virtual Enveloppe

var virtualEnveloppe = randomList(allList);
// Method to reveal the mystery

function andTheMysteryIs(mystery) {
  //for (var i = 0, i < mystery.length; i += 1){  }
  console.log(mystery[0].name + " killed with a(n) " + mystery[1].name + " in the " + mystery[2].name  + ".");
}

andTheMysteryIs(virtualEnveloppe);
