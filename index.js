// suspects
var mrGreen = {
    name: "Jacob Green", color:"green", bio: "He has a lot of connections and is always willing to help people out -- for a price"
};
var drOrchid ={
  name: "Dr. Orchid", color: "white", bio: " She is the adopted daughter of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"
};
var mrPlum= {
  name: "Victor Plum", color: "purple", bio: "He is a billionaire video game designer who is embracing his new popularity."
};
var msScarlet = {
  name: "Kasandra Scarlet", color: "red", bio: "She is an A-list movie star whose past haunts her"
};
var msPeacock = {
  name: "Eleanor Peacock", color:"blue", bio: "She is from a wealthy family and uses her status and money to earn popularity."
};
var colMustard = {
  name: "Jack Mustard", color: "yellow", bio: "He is a former football player who tries to get by on his former glory"
};

// weapons
var rope = {
  name: "rope", damage: 8,
};
var knife = {
  name: "knife", damage: 9,
};
var candleStick = {
  name: "candlestick", damage: 7,
};
var dumbBell = {
  name: "dumbbell", damage: 9,
};
var poison = {
  name: "poison", damage: 10,
};
var axe = {
  name: "axe", damage: 10,
};
var bat = {
  name: "bat", damage: 9,
};
var trophy = {
  name: "trophy", damage: 6,
};
var pistol = {
  name: "pistol", damage: 10,
};

// rooms
var diningRoom = {
  name: "dining room", size: "large",
};
var conservatory = {
  name: "conservatory", size: "small",
};
var kitchen = {
  name: "kitchen", size: "small",
};
var study = {
  name: "study", size: "medium",
};
var library = {
  name: "library", size: "small",
};
var billiardRoom = {
  name: "billiard room", size: "medium",
};
var lounge = {
  name: "lounge", size: "medium",
};
var ballRoom = {
  name: "ball room", size: "large",
};
var hall = {
  name: "hall", size: "large",
};
var spa = {
  name: "spa", size: "small",
};
var livingRoom = {
  name: "living room", size: "small",
};
var observatory = {
  name: "observatory", size: "large",
};
var theater = {
  name: "theater", size: "large",
};
var guestHouse = {
  name: "guest house", size: "large",
};
var patio = {
  name: "patio", size: "medium",
};
var arraySuspects=[ mrGreen, drOrchid, mrPlum, msScarlet, msPeacock, colMustard ];

var arrayWeapons=[ rope, knife, candleStick, dumbBell, poison, axe, bat, trophy, pistol ];

var arrayRooms=[ diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHouse, patio ];


function randomizer(array) {
 var float = Math.random() * array.length ;
 float = Math.floor(float);
 return float;
}

var killer = arraySuspects[randomizer(arraySuspects)].name;
var weapon = arrayWeapons[randomizer(arrayWeapons)].name;
var room = arrayRooms[randomizer(arrayRooms)].name;


function theReveal(answer) {
  if (answer.toUpperCase() === "YES") {
    console.log(`The killer is ${killer} with the ${weapon} in the ${room}.`);
  } else if (answer.toUpperCase() === "NO") {
    console.log("Okay. When you're ready, refresh the page for this prompt again.");
  } else {
    console.log("That's not a valid answer. Refresh the page for this prompt again.");
  }
}

theReveal(prompt ("Would you like to reveal the mystery?"));
