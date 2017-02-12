var suspects = [];

var mrGreen = {
firstName: "Jacob",
lastName: "Green",
occupation: "",
color: "green",
description: "He has a lot of connections and is always willing to help people out -- for a price."
};

var drOrchid = {
firstName: "Sonia",
lastName: "Orchid",
occupation: "doctor",
color: "white",
description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."
};

var victorPlum = {
firstName: "Victor",
lastName: "Plum",
occupation: "video game designer",
color: "purple",
description: "He is a billionaire video game designer who is embracing his new popularity."
};
var kasandraScarlet = {
firstName: "Kasandra",
lastName: "Scarlet",
occupation: "A-list movie star",
color: "red",
description: ""
};
var eleonorePeacock = {
firstName: "Eleonore",
lastName: "Peackok",
occupation: "unemployed",
color: "blue",
description: "She is from a wealthy family and uses her status and money to earn popularity."
};
var jackMustard = {
firstName: "Jack",
lastName: "Mustard",
occupation: "football player",
color: "yellow",
description: "He is a former football player who tries to get by on his former glory."
};


suspects.push(mrGreen, drOrchid, victorPlum, kasandraScarlet, eleonorePeacock,jackMustard);


var weapons = [];

var rope = {
name: "rope",
weight: "3 pounds",
color: "black",
painlevel: "hurts"
};
var knife ={
name: "knife",
weight: "0.2 pound",
color: "dark brown",
painlevel: "hurts bad"
};
var candlestick = {
name: "candlestick",
weight: "4 pounds",
color: "gold",
painlevel: "so-so"
};
var dumbbell ={
name: "dumbbell",
weight: "50 pounds",
color: "black",
painlevel: "hurts super bad"
};
var poison = {
name:"poison",
weight: "0.001 pound",
color: "blue",
painlevel: "no pain"
};
var axe = {
name: "axe",
weight: "20 pounds",
color: "grey",
painlevel: "really hurts"
};
var bat = {
name: "bat",
weight: "10 pounds",
color: "black",
painlevel: "so-so"
};
var trophy = {
name: "trophy",
weight: "15 pounds",
color: "silver",
painlevel: "so-so"
};
var pistol = {
name: "pistol",
weight: "1 pound",
color: "black",
painlevel: "hurts"
};

weapons.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

var rooms = [
  "dining room", "conservatory", "kitchen", "study","library",
  "billiard room", "lounge", "ballroom","hall", "spa", "living room",
  "observatory", "theater", "guest house", "patio"
];

var randomSuspect = Math.floor(Math.random() * suspects.length);
var randomRoom = Math.floor(Math.random() * rooms.length);
var randomWeapon = Math.floor(Math.random() * weapons.length);

// 1. Create a method to randomly select one element from a card stack:

// function pickFromCards() {
//   console.log(suspects[randomSuspect]);
//   console.log(rooms[randomRoom]);
//   console.log(weapons[randomWeapon]);
// }
// pickFromCards();

// 2. Create another function that calls the method above once for each card stack:

function pickFromStackSuspects() {
  console.log(suspects[randomSuspect]);
}
// pickFromStackSuspects();
function pickFromStackRooms() {
  console.log(rooms[randomRoom]);
}
// pickFromStackRooms();

function pickFromStackWeapons() {
  console.log(weapons[randomWeapon]);
}
// pickFromStackWeapons();

// Place the “Case File Confidential” in a virtual envelope:
var name = prompt("Insert your name:");
var confirmName= prompt(alert("If you are seeing this message you are about to reveal confidential information regarding mysterious murder. Please confirm your name:"));

if (name.toUpperCase() === confirmName.toUpperCase()){
  console.log("The confidential information you are looking for is here -  suspect: ", suspects[randomSuspect], ", \n \n room where the crime was commited: ", rooms[randomRoom], ", \n \n weapon that was used:", weapons[randomWeapon]);
}
else {
  alert("Your identity is not confirmed. The access to the confidential information is denied!");
}
