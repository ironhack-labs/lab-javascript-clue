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

function randomSelector (someArray){
  return Math.floor(Math.random() * someArray.length);
}

// randomSelector(weapons);

var misteryEnvelope = [];
function pickMistery(){
  // var randomSuspect = suspects[randomSelector(suspects)];
  // var randomWeapon = weapons[randomSelector(weapons)];
  // var randomRoom = rooms[randomSelector(rooms)];

  // misteryEnvelope.push(randomSuspect, randomWeapon, randomRoom );
  misteryEnvelope.push(suspects[randomSelector(suspects)],weapons[randomSelector(weapons)], rooms[randomSelector(rooms)] )
  return misteryEnvelope;
}

pickMistery();

// <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the  <PLACE>!!!!

function revealMistery(someMistery){
  return `${someMistery[0].firstName} ${someMistery[0].lastName} killed Mr.Body using the ${someMistery[1].name} in the ${someMistery[2]}`
}
revealMistery(misteryEnvelope)
